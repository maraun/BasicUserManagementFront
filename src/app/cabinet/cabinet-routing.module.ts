import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CabinetComponent} from './cabinet.component';
import {UsersComponent} from './users/users.component';
import {ProfileComponent} from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'users',
        component: UsersComponent,
        loadChildren: () => import('./users/users.module')
          .then(m => m.UsersModule),
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],

  },
  {
    path: '**',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabinetRoutingModule { }
