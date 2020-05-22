import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

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
          hidden: false,
        },
        {
          title: 'Roles',
          link: '/cabinet/users/roles',
          hidden: false,
        },
      ],
    },
  ]
cmenu = this.CMENU_ITEMS;

}

