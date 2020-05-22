import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';
import {TokenStorageService} from '../auth/token-storage.service';


@Component({
  selector: 'ngx-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss'],
})

export class CabinetComponent {

  CMENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Users',
      icon: 'layout-outline',
      children: [
        {
          title: 'List',
          link: '/cabinet/users/list',
          hidden: !this.hasRole('ROLE_ADMIN'),
        },
        {
          title: 'Roles',
          link: '/cabinet/users/roles',
          hidden: false,
        },
      ],
    },
  ];
  cmenu = this.CMENU_ITEMS;
  roles: string[] = [];
  constructor(private tokenStorage: TokenStorageService) {}
  hasRole(checkRole: string): boolean {
    this.roles = this.tokenStorage.getAuthorities();
    if (this.roles.includes(checkRole)) {
      return true;
    } else {
      return false;
    }
  }
}

