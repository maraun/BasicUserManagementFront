import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'ngx-permission-holder-add',
  templateUrl: './permission-holder-add.component.html',
  styleUrls: ['./permission-holder-add.component.scss'],
})
export class PermissionHolderAddComponent implements OnInit {

  @Input() roleName: string;
  @Input() roleId: string;
  constructor(protected ref: NbDialogRef<PermissionHolderAddComponent>) { }

  ngOnInit() {
  }

  dismiss() {
    this.ref.close();
  }
}
