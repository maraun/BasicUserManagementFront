import { Component, OnInit } from '@angular/core';
import {RoleService} from '../../../@core/services/role.service';
import {NbDialogService} from '@nebular/theme';
import {ToastService} from '../../../@core/services/toast.service';
import {GroupRoles} from '../../../@core/models/profile/GroupRoles';
import {UserService} from '../../../@core/services/user.service';
import {User} from '../../../@core/models/profile/user';

@Component({
  selector: 'ngx-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
})
export class PermissionsComponent implements OnInit {
  groupRoles: GroupRoles[] = [];
  users: User[] = [];
  selectedPermissionOption: string;
  constructor(private roleService: RoleService,
              private userService: UserService,
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
    this.userService.findAllByRole(+this.selectedPermissionOption).subscribe(data => {
      this.users = data;
    },
      error => {
        this.toast.error('Data not loaded', 'cloud-download-outline');
      });
  }
}
