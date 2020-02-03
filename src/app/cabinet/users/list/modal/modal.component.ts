import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbIconConfig, NbToastrService} from '@nebular/theme';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../@core/models/profile/user';
import {UserService} from '../../../../@core/services/user.service';
import {ToastService} from '../../../../@core/services/toast.service';
import {Additional} from '../../../../@core/models/profile/Additional';
import {Contacts} from '../../../../@core/models/profile/Contacts';
import {Profile} from '../../../../@core/models/profile/profile';
import {Nationality} from '../../../../@core/models/profile/Nationality';
import {Citizenship} from '../../../../@core/models/profile/Citizenship';
import {MaritalStatus} from '../../../../@core/models/profile/MaritalStatus';
import {Gender} from '../../../../@core/models/profile/Gender';
import {Position} from '../../../../@core/models/profile/Position';
import {Document} from '../../../../@core/models/profile/Document';
import {Role} from '../../../../@core/models/profile/role';
import {XprofileService} from '../../../../@core/services/xprofile.service';

@Component({
  selector: 'ngx-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() id: number;

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  user: User = null;
  user2: User = null;
  profile2: Profile = null;
  contacts2: Contacts = null;
  additional2: Additional = null;
  nationalities: Nationality[] = [];
  citizenships: Citizenship[] = [];
  maritalStatuses: MaritalStatus[] = [];
  genders: Gender[] = [];
  positions2: Position[] = [];
  documents2: Document[] = [];
  roles2: Set<Role> = new Set<Role>();
  loading = false;
  userExist = false;

  constructor(protected ref: NbDialogRef<ModalComponent>,
              private fb: FormBuilder,
              private toast: ToastService,
              private userService: UserService,
              private xProfileService: XprofileService) {
  }

  dismiss() {
    this.ref.close();
  }

  ngOnInit() {
    this.loadXprofile();
    this.initForm();
    this.loading = true;
    this.loadData();
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
    this.submitData();
    if (this.id === 0) {
      this.userService.save(this.user2).subscribe((perf) => {
          this.user = perf;
          this.dismiss();
          this.toast.success('User added', 'person-done-outline');
        },
        err => {
          this.toast.error('User can not be created', 'cloud-download-outline');
        });
    } else {
      this.userService.update(this.user2).subscribe((perf) => {
          this.user = perf;
          this.dismiss();
          this.toast.success('Changes saved', 'cloud-upload-outline');
        },
        err => {
          this.toast.error('Changes can not be saved', 'cloud-download-outline');
        });

    }
  }

  initForm() {
    this.firstForm = new FormGroup({
      iin: new FormControl(),
      password: new FormControl(),
      lastname: new FormControl(),
      firstname: new FormControl(),
      middlename: new FormControl(),
      previousLastname: new FormControl(),
      birthDate: new FormControl(),
      gender: new FormControl(),
      maritalStatus: new FormControl(),
    });
    this.secondForm = new FormGroup({
      nationality: new FormControl(),
      citizenship: new FormControl(),
      livingPlace: new FormControl(),
      registrationPlace: new FormControl(),
      email: new FormControl(),
      mobilePhone: new FormControl(),
      workPhone: new FormControl(),
      homePhone: new FormControl(),
    });
    this.thirdForm = new FormGroup({
      additional: new FormControl(),
    });
  }

  loadData() {
    if (this.id === 0) {
      this.user = new User();
    } else {
      this.userService.getByProfileId(this.id).subscribe((perf) => {
          this.user = perf;
          this.loading = false;
          this.userExist = !!this.user;
          this.firstForm = this.fb.group({
            iin: [this.user.username, Validators.required],
            password: ['*', Validators.required],
            lastname: [this.user.profile.lastname, Validators.required],
            firstname: [this.user.profile.firstname, Validators.required],
            middlename: [this.user.profile.middlename],
            previousLastname: [this.user.profile.previouslastname],
            birthDate: [this.user.profile.birthdate, Validators.required],
            gender: [this.user.profile.gender.id, Validators.required],
            maritalStatus: [this.user.profile.maritalStatus.id, Validators.required],
          });
          this.secondForm = this.fb.group({
            nationality: [this.user.profile.nationality.id, Validators.required],
            citizenship: [this.user.profile.citizenship.id, Validators.required],
            livingPlace: [this.user.profile.livingPlace, Validators.required],
            registrationPlace: [this.user.profile.registrationPlace, Validators.required],
            email: [this.user.contacts.email, Validators.required],
            mobilePhone: [this.user.contacts.mobilephone, Validators.required],
            workPhone: [this.user.contacts.workphone, Validators.required],
            homePhone: [this.user.contacts.homephone],
          });

          this.thirdForm = this.fb.group({
            additional: [this.user.additional.information],
          });
        },
        err => {
          this.toast.error('Data not loaded', 'cloud-download-outline');
        });
    }
  }

  submitData() {
    this.profile2 = {
      id: (this.id === 0) ? null : this.user.profile.id,
      firstname: this.firstForm.value.firstname,
      lastname: this.firstForm.value.lastname,
      middlename: this.firstForm.value.middlename,
      previouslastname: this.firstForm.value.previousLastname,
      iin: this.firstForm.value.iin,
      birthdate: this.firstForm.value.birthDate,
      nationality: this.nationalities.find(
        item => item.id === this.secondForm.value.nationality),
      citizenship: this.citizenships.find(
        item => item.id === this.secondForm.value.citizenship),
      gender: this.genders.find(
        item => item.id === this.firstForm.value.gender),
      maritalStatus: this.maritalStatuses.find(
        item => item.id === this.firstForm.value.maritalStatus),
      registrationPlace: this.secondForm.value.registrationPlace,
      livingPlace: this.secondForm.value.livingPlace,
    };
    this.contacts2 = {
      id: (this.id === 0) ? null : this.user.contacts.id,
      homephone: this.secondForm.value.homePhone,
      mobilephone: this.secondForm.value.mobilePhone,
      workphone: this.secondForm.value.mobilePhone,
      email: this.secondForm.value.email,
    };
    this.additional2 = {
      id: (this.id === 0) ? null : this.user.additional.id,
      information: this.thirdForm.value.additional,
    };
    this.user2 = {
      id: (this.id === 0) ? null : this.id,
      username: this.firstForm.value.iin,
      password: this.firstForm.value.password,
      roles: (this.id === 0) ? null : this.user.roles,
      positions: (this.id === 0) ? null : this.user.positions,
      documents: (this.id === 0) ? null : this.user.documents,
      profile: this.profile2,
      contacts: this.contacts2,
      additional: this.additional2,
    };
  }

  loadXprofile() {
    this.xProfileService.getNationalities().subscribe(data => {
      this.nationalities = data;
    });
    this.xProfileService.getCitizenships().subscribe(data => {
      this.citizenships = data;
    });
    this.xProfileService.getGenders().subscribe(data => {
      this.genders = data;
    });
    this.xProfileService.getMaritalStatuses().subscribe(data => {
      this.maritalStatuses = data;
    });
  }
}
