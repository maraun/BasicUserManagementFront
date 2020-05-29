import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {UserService} from '../../../../../@core/services/user.service';
import {Profile} from '../../../../../@core/models/profile/profile';
import {User} from '../../../../../@core/models/profile/user';

@Component({
  selector: 'ngx-permission-holder-add',
  templateUrl: './permission-holder-add.component.html',
  styleUrls: ['./permission-holder-add.component.scss'],
})
export class PermissionHolderAddComponent implements OnInit {

  @Input() roleName: string;
  @Input() roleId: string;
  @Input() userlist: User[];
  values = '';
  users: Profile[];
  constructor(protected ref: NbDialogRef<PermissionHolderAddComponent>,
              private userService: UserService) { }

  ngOnInit() {
  }

  dismiss() {
    this.ref.close();
  }

  onKey(value: string) {
    if (value.length > 3) {
      setTimeout(() => this.userService.findByKeyword(value).subscribe((perf) => {
        this.users = perf;
      }), 1500);
    }

  }
}
