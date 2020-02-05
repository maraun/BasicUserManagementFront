import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbIconConfig, NbToastrService} from '@nebular/theme';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  positions: FormArray;
  user: User = new User();
  user2: User = null;
  profile2: Profile = null;
  contacts2: Contacts = null;
  additional2: Additional = null;
  nationalities: Nationality[] = [];
  citizenships: Citizenship[] = [];
  maritalStatuses: MaritalStatus[] = [];
  genders: Gender[] = [];
  positions2: Set<Position> = new Set<Position>();
  documents2: Set<Document> = new Set<Document>();
  roles2: Set<Role> = new Set<Role>();
  loading = false;
  userExist = false;

  constructor(protected ref: NbDialogRef<ModalComponent>,
              private fb: FormBuilder,
              private toast: ToastService,
              private userService: UserService,
              private xProfileService: XprofileService) {
    this.firstForm = this.initFirstForm();
    this.secondForm = this.initSecondForm();
    this.thirdForm = this.initThirdForm();
  }

  dismiss() {
    this.ref.close();
  }

  ngOnInit() {
    this.loadXprofile();

    if (this.id === 0) {
      this.user = new User();
    } else {
      this.userService.getByProfileId(this.id).subscribe((perf) => {
          this.user = perf;
          this.loading = false;
          this.userExist = !!this.user;
          this.firstForm = this.initFirstForm();
          this.secondForm = this.initSecondForm();
          this.thirdForm = this.initThirdForm();
        },
        err => {
          this.toast.error('Data not loaded', 'cloud-download-outline');
        });
    }
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

  private initFirstForm() {
    return this.fb.group({
      iin: [!this.user.username ? '' : this.user.username],
      password: ['*', Validators.required],
      lastname: [!this.user.profile ? '' : this.user.profile.lastname],
      firstname: [!this.user.profile ? '' : this.user.profile.firstname],
      middlename: [!this.user.profile ? '' : this.user.profile.middlename],
      previousLastname: [!this.user.profile ? '' : this.user.profile.previouslastname],
      birthDate: [!this.user.profile ? '' : this.user.profile.birthdate],
      gender: [!this.user.profile ? '' : this.user.profile.gender.id],
      maritalStatus: [!this.user.profile ? '' : this.user.profile.maritalStatus.id],
    });
  }

  private initSecondForm() {
    return this.fb.group({
      nationality: [!this.user.profile ? '' : this.user.profile.nationality.id],
      citizenship: [!this.user.profile ? '' : this.user.profile.citizenship.id],
      livingPlace: [!this.user.profile ? '' : this.user.profile.livingPlace],
      registrationPlace: [!this.user.profile ? '' : this.user.profile.registrationPlace],
      email: [!this.user.contacts ? '' : this.user.contacts.email],
      mobilePhone: [!this.user.contacts ? '' : this.user.contacts.mobilephone],
      workPhone: [!this.user.contacts ? '' : this.user.contacts.workphone],
      homePhone: [!this.user.contacts ? '' : this.user.contacts.homephone],
    });
  }

  private initThirdForm() {
    return this.fb.group({
      additional: [!this.user.additional ? '' : this.user.additional.information],
      positions: this.fb.array([this.initPosition()]),
      documents: this.fb.array([this.user.documents]),
    });
  }

  private addPosition() {
    const pos = this.thirdForm.controls.positions.value as FormArray;
    pos.push(this.fb.group({
      id: [],
      position: '',
    }));
  }
  private initPosition() {
    return this.fb.group({
      id: ['asdasd'],
      position: ['asdasd'],
    });
  }
}
