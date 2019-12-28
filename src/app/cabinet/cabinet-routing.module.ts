import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CabinetComponent} from './cabinet.component';
import {UsersComponent} from './users/users.component';


const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
      },
    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabinetRoutingModule { }
