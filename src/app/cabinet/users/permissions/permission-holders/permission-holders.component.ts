import { Component, OnInit } from '@angular/core';
import {PermissionsComponent} from '../permissions.component';

@Component({
  selector: 'ngx-permission-holders',
  templateUrl: './permission-holders.component.html',
  styleUrls: ['./permission-holders.component.scss'],
})
export class PermissionHoldersComponent implements OnInit {

  constructor(private permissionsComponent: PermissionsComponent) { }

  ngOnInit() {
  }

}
