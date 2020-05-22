import {NbMenuItem} from '@nebular/theme';

export const CMENU_ITEMS: NbMenuItem[] = [
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
        hidden: ngxHasRole
      },
    ],
  },
]
