import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetComponent } from './reset/reset.component';
import { BlockComponent } from './block/block.component';
import {FormsModule} from '@angular/forms';
import {NbAlertModule, NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule} from '@nebular/theme';
import {NbAuthModule} from '@nebular/auth';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, ResetComponent, BlockComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbAlertModule,
    NbAuthModule,
  ],
})
export class AuthModule { }
