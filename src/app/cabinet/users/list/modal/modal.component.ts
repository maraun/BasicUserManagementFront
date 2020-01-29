import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title: string;

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  constructor(protected ref: NbDialogRef<ModalComponent>, private fb: FormBuilder) { }

  dismiss() {
    this.ref.close();
  }

  ngOnInit() {
    this.firstForm = this.fb.group({
      iin: ['', Validators.required],
      password: ['', Validators.required],
      lastname: ['', Validators.required],
      name: ['', Validators.required],
      middlename: [''],
      previousLastname: [''],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      maritalStatus: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      nationality: ['', Validators.required],
      citizenship: ['', Validators.required],
      livingPlace: ['', Validators.required],
      registrationPlace: ['', Validators.required],
      email: ['', Validators.required],
      mobilePhone: ['', Validators.required],
      workPhone: ['', Validators.required],
      homePhone: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });

  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }

}
