import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'ngx-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() title: string;
  constructor(protected ref: NbDialogRef<ModalComponent>) { }

  dismiss() {
    this.ref.close();
  }

}
