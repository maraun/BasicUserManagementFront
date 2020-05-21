import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {ButtonDeleteComponent, ButtonViewComponent, ListComponent} from './list/list.component';
import { RolesComponent } from './roles/roles.component';
import { StructureComponent } from './structure/structure.component';
import {
  NbAlertModule, NbBadgeModule,
  NbButtonModule,
  NbCardModule, NbDatepickerModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule, NbListModule, NbRadioModule, NbSelectModule,
  NbStepperModule, NbTabsetModule,
} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { ModalComponent } from './list/modal/modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RoleSettingsComponent } from './roles/role-settings/role-settings.component';


@NgModule({
  declarations: [
    ListComponent,
    RolesComponent,
    StructureComponent,
    ButtonViewComponent,
    ModalComponent,
    ButtonDeleteComponent,
    RoleSettingsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbStepperModule,
    ReactiveFormsModule,
    NbInputModule,
    NbDatepickerModule,
    NbSelectModule,
    NbListModule,
    NbRadioModule,
    FormsModule,
    NbTabsetModule,
    NbAlertModule,
    NbBadgeModule,
  ],
  entryComponents: [ButtonViewComponent, ModalComponent, ButtonDeleteComponent],
})
export class UsersModule { }
