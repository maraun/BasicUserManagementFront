import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(private  tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/auth/login');
  }

}
