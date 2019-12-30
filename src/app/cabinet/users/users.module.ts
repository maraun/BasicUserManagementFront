import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { RolesComponent } from './roles/roles.component';
import { StructureComponent } from './structure/structure.component';


@NgModule({
  declarations: [ListComponent, RolesComponent, StructureComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
})
export class UsersModule { }
