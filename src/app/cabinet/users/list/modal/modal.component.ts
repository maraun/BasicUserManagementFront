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
  fourthForm: FormGroup;
  fifthForm: FormGroup;
  sixthForm: FormGroup;
  seventhForm: FormGroup;
  eighthForm: FormGroup;
  constructor(protected ref: NbDialogRef<ModalComponent>, private fb: FormBuilder) { }

  dismiss() {
    this.ref.close();
  }

  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });

    this.fourthForm = this.fb.group({
      fourthCtrl: ['', Validators.required],
    });

    this.fifthForm = this.fb.group({
      fifthCtrl: ['', Validators.required],
    });

    this.sixthForm = this.fb.group({
      sixthCtrl: ['', Validators.required],
    });

    this.seventhForm = this.fb.group({
      seventhCtrl: ['', Validators.required],
    });

    this.eighthForm = this.fb.group({
      eighthCtrl: ['', Validators.required],
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

  onFourthSubmit() {
    this.fourthForm.markAsDirty();
  }

  onFifthSubmit() {
    this.fifthForm.markAsDirty();
  }

  onSixthSubmit() {
    this.sixthForm.markAsDirty();
  }

  onSeventhSubmit() {
    this.seventhForm.markAsDirty();
  }

  onEighthSubmit() {
    this.eighthForm.markAsDirty();
  }
}
