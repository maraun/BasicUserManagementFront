import { Component, OnInit } from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {ToastService} from '../../../@core/services/toast.service';
import {RoleService} from '../../../@core/services/role.service';
import {Role} from '../../../@core/models/profile/role';
import {GroupRoles} from '../../../@core/models/profile/GroupRoles';

@Component({
  selector: 'ngx-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  roles: Role[] = [];
  selectedRole: Role;
  selectedOption: string;
  groupRoles: GroupRoles[] = [];
  constructor(private roleService: RoleService,
    private dialogService: NbDialogService,
    private toast: ToastService) { }

  ngOnInit() {
    this.fetchAllGroupRoles();
  }

  fetchAll() {
    this.roleService.findAll().subscribe(data => {
        this.roles = data;
      },
      err => {
        this.toast.error('Data not loaded', 'cloud-download-outline');
      });
  }
  fetchAllGroupRoles() {
    this.roleService.findAllGroupRoles().subscribe(data => {
      this.groupRoles = data;
    },
      error => {
      this.toast.error('Data not loaded', 'cloud-download-outline');
      });
  }
  selectRole() {
    this.roleService.getByRoleId(+this.selectedOption).subscribe(data => {
        this.selectedRole = data;
      },
      err => {
        this.toast.error('Data not loaded', 'cloud-download-outline');
      });
  }



}
