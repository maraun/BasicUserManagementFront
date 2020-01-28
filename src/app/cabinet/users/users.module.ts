import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {ButtonViewComponent, ListComponent} from './list/list.component';
import { RolesComponent } from './roles/roles.component';
import { StructureComponent } from './structure/structure.component';
import {NbButtonModule, NbCardModule, NbDialogModule, NbIconModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { ModalComponent } from './list/modal/modal.component';


@NgModule({
  declarations: [ListComponent, RolesComponent, StructureComponent, ButtonViewComponent, ModalComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
  ],
  entryComponents: [ButtonViewComponent, ModalComponent],
})
export class UsersModule { }
