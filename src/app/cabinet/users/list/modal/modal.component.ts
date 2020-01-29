import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbIconConfig, NbToastrService} from '@nebular/theme';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../@core/models/profile/user';
import {UserService} from '../../../../@core/services/user.service';

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
  loading = false;
  userExist = false;

  constructor(protected ref: NbDialogRef<ModalComponent>, private fb: FormBuilder,
              private toastrService: NbToastrService, private userService: UserService) {
  }

  dismiss() {
    this.ref.close();
  }

  ngOnInit() {
    this.initForm();
    this.loading = true;
    if (this.id === 0) {
      this.user = new User();
    } else {
      this.userService.getByProfileId(this.id).subscribe((perf) => {
          this.user = perf;
          this.loading = false;
          this.userLoaded();
          this.firstForm = this.fb.group({
            iin: [this.user.username, Validators.required],
            password: ['*', Validators.required],
            lastname: [this.user.profile.lastname, Validators.required],
            name: [this.user.profile.firstname, Validators.required],
            middlename: [this.user.profile.middlename],
            previousLastname: [this.user.profile.previouslastname],
            birthDate: [this.user.profile.birthdate, Validators.required],
            gender: [this.user.profile.gender.name, Validators.required],
            maritalStatus: [this.user.profile.maritalStatus.name, Validators.required],
          });
          this.secondForm = this.fb.group({
            nationality: [this.user.profile.nationality.name, Validators.required],
            citizenship: [this.user.profile.citizenship.name, Validators.required],
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
          this.showErrorToast();
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
    this.user.profile.iin = this.firstForm.get('iin').value;
    if (this.id === 0) {
      this.showCreateToast();
    } else {
      this.showUpdateToast();
    }
  }

  showErrorToast() {
    const iconConfig: NbIconConfig = {icon: 'cloud-download-outline', pack: 'eva', status: 'danger'};
    this.toastrService.show('Data loading error', `Error`, iconConfig);
  }

  showUpdateToast() {
    const iconConfig: NbIconConfig = {icon: 'cloud-upload-outline', pack: 'eva', status: 'success'};
    this.toastrService.show('Changes saved', `Done`, iconConfig);
  }

  showCreateToast() {
    const iconConfig: NbIconConfig = {icon: 'cloud-upload-outline', pack: 'eva', status: 'success'};
    this.toastrService.show('User created', `Done`, iconConfig);
  }

  initForm() {
    this.firstForm = new FormGroup({
      iin: new FormControl(),
      password: new FormControl(),
      lastname: new FormControl(),
      name: new FormControl(),
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

  userLoaded() {
    if (!!this.user) {
      this.userExist = true;
    } else {
      this.userExist = false;
    }
  }
}
