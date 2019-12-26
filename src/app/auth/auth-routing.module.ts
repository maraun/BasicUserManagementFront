import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlockComponent} from './block/block.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {ResetComponent} from './reset/reset.component';


const routes: Routes = [
  {
    path: '',
    component: BlockComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'reset',
        component: ResetComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
