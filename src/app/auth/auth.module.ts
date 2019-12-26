import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetComponent } from './reset/reset.component';
import { BlockComponent } from './block/block.component';
import {FormsModule} from '@angular/forms';
import {NbCardModule, NbLayoutModule} from "@nebular/theme";


@NgModule({
  declarations: [LoginComponent, LogoutComponent, ResetComponent, BlockComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    NbLayoutModule,
    NbCardModule,
  ],
})
export class AuthModule { }
