import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { RolesComponent } from './roles/roles.component';
import { StructureComponent } from './structure/structure.component';
import {NbCardModule} from "@nebular/theme";
import {Ng2SmartTableModule} from "ng2-smart-table";


@NgModule({
  declarations: [ListComponent, RolesComponent, StructureComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
  ],
})
export class UsersModule { }
