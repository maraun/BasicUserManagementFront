import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbIconConfig, NbToastrService} from '@nebular/theme';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../@core/models/profile/user';
import {UserService} from '../../../../@core/services/user.service';
import {ToastService} from '../../../../@core/services/toast.service';

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

  constructor(protected ref: NbDialogRef<ModalComponent>,
              private fb: FormBuilder,
              private toast: ToastService,
              private userService: UserService) {
  }

  dismiss() {
    this.ref.close();
  }

  ngOnInit() {
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
    if (this.id === 0) {
      this.toast.success('User created', 'person-done-outline');
    } else {
      this.toast.success('Changes saved', 'cloud-upload-outline');
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
          this.toast.error('Data not load', 'cloud-download-outline');
        });
    }
  }
}
