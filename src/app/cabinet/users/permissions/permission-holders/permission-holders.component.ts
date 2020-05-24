import {Component, Input, OnInit} from '@angular/core';
import {PermissionsComponent} from '../permissions.component';
import {User} from '../../../../@core/models/profile/user';
import {ToastService} from '../../../../@core/services/toast.service';
import {UserService} from '../../../../@core/services/user.service';
import {Role} from '../../../../@core/models/profile/role';

@Component({
  selector: 'ngx-permission-holders',
  templateUrl: './permission-holders.component.html',
  styleUrls: ['./permission-holders.component.scss'],
})
export class PermissionHoldersComponent implements OnInit {
  @Input() users: User[];
  @Input() selectedPermissionOption: string;
  private user: User = new User();
  private roles: Role[];
  constructor( private toast: ToastService,
              private userService: UserService) { }

  ngOnInit() {
  }

  removeRole(user: User, roleid: number) {
    user.roles.forEach((role) => {
      if (role.id === roleid) {
        const index = user.roles.findIndex(n => n.id === roleid);
        if (index !== -1) {
          user.roles.splice(index, 1);
        }
        }
      });
    this.userService.update(user).subscribe((perf) => {
        this.user = perf;
        const index = this.users.findIndex(u => u.id === user.id);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
        this.toast.success('Permission deleted', 'cloud-upload-outline');
      },
      err => {
        this.toast.error('Something gone wrong', 'cloud-download-outline');
      });
  }
}
