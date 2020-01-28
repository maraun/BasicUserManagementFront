import { Component, OnInit } from '@angular/core';
import {User} from '../../@core/models/profile/user';
import {UserService} from '../../@core/services/user.service';
import {NbIconConfig, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: User = null;
  loading = false;

  constructor(private userService: UserService,
              private toastrService: NbToastrService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.current().subscribe((perf) => {
      this.user = perf;
      this.loading = false; },
        err => {this.showErrorToast(); });
  }
  showErrorToast() {
    const iconConfig: NbIconConfig = { icon: 'cloud-download-outline', pack: 'eva', status: 'danger'};
    this.toastrService.show('Data loading error', `Error`, iconConfig);
  }
}
