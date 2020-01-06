import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabinetRoutingModule } from './cabinet-routing.module';
import { CabinetComponent } from './cabinet.component';
import {ThemeModule} from "../@theme/theme.module";
import {
  NbAlertModule,
  NbBadgeModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbSpinnerModule, NbTabsetModule
} from "@nebular/theme";
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [CabinetComponent, UsersComponent, ProfileComponent],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbLayoutModule,
    NbCardModule,
    NbAlertModule,
    NbBadgeModule,
    NbSpinnerModule,
    NbTabsetModule
  ]
})
export class CabinetModule { }
