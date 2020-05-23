import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {PermissionsComponent} from './permissions/permissions.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'list',
      component: ListComponent,
    },
    {
      path: 'permissions',
      component: PermissionsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
