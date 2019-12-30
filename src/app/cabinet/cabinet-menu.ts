import {NbMenuItem} from '@nebular/theme';

export const CMENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Users',
    icon: 'layout-outline',
    children: [
      {
        title: 'List',
        link: '/cabinet/users/list',
      },
      {
        title: 'Roles',
        link: '/cabinet/users/roles',
      },
      {
        title: 'Structure',
        link: '/cabinet/users/structure',
      },
    ],
  },
]
