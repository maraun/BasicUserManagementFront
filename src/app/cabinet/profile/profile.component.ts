import { Component, OnInit } from '@angular/core';
import {User} from '../../@core/models/profile/user';
import {UserService} from '../../@core/services/user.service';
import {ToastService} from '../../@core/services/toast.service';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: User = null;
  loading = false;

  constructor(private userService: UserService,
              private toast: ToastService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.current().subscribe((perf) => {
      this.user = perf;
      this.loading = false; },
        err => {this.toast.error('Data not loaded', 'cloud-download-outline'); });
  }
}
