import {Component, OnInit} from '@angular/core';

import {AuthService} from '../auth.service';
import {TokenStorageService} from '../token-storage.service';
import {AuthLoginInfo} from '../login-info';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  firstname: string = '';
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.tokenStorage.saveFirstname(data.firstname);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.firstname = this.tokenStorage.getFirstname();
        this.router.navigateByUrl('/cabinet/profile');
        /*this.reloadPage();*/
      },
      error => {

        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      },
    );
  }

  /*  reloadPage() {
      window.location.reload();
    }*/
}
