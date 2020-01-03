import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {RolesComponent} from './roles/roles.component';
import {StructureComponent} from './structure/structure.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'list',
      component: ListComponent,
    },
    {
      path: 'roles',
      component: RolesComponent,
    },
    {
      path: 'structure',
      component: StructureComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
