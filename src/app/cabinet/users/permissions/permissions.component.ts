import { Component, OnInit } from '@angular/core';
import {RoleService} from '../../../@core/services/role.service';
import {NbDialogService} from '@nebular/theme';
import {ToastService} from '../../../@core/services/toast.service';
import {GroupRoles} from '../../../@core/models/profile/GroupRoles';

@Component({
  selector: 'ngx-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
})
export class PermissionsComponent implements OnInit {
  groupRoles: GroupRoles[] = [];
  selectedPermissionOption: string;
  constructor(private roleService: RoleService,
              private dialogService: NbDialogService,
              private toast: ToastService) { }

  ngOnInit() {
    this.fetchAllGroupRoles();
  }
  fetchAllGroupRoles() {
    this.roleService.findAllGroupRoles().subscribe(data => {
        this.groupRoles = data;
      },
      error => {
        this.toast.error('Data not loaded', 'cloud-download-outline');
      });
  }

  getPermissionHolders() {

  }
}
