import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';
import {RoleService} from '../@core/services/role.service';


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
          hidden: (!this.roleService.hasRole('ROLE_ADMIN') && !this.roleService.hasRole('ROLE_PM')),
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

  constructor(private roleService: RoleService) {}

}

