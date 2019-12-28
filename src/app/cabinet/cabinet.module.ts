import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabinetRoutingModule } from './cabinet-routing.module';
import { CabinetComponent } from './cabinet.component';
import {ThemeModule} from "../@theme/theme.module";
import {NbMenuModule} from "@nebular/theme";
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [CabinetComponent, UsersComponent],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    ThemeModule,
    NbMenuModule
  ]
})
export class CabinetModule { }
