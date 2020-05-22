import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocalDataSource, ViewCell} from 'ng2-smart-table';
import {UserService} from '../../../@core/services/user.service';
import {User} from '../../../@core/models/profile/user';
import {Profile} from '../../../@core/models/profile/profile';
import {NbDialogService} from '@nebular/theme';
import {ModalComponent} from './modal/modal.component';
import {ToastService} from '../../../@core/services/toast.service';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {RoleService} from "../../../@core/services/role.service";

@Component({
  selector: 'ngx-button-view',
  template: `
    <button (click)="onClick()" nbButton ghost status="primary" size="tiny">
      <nb-icon icon="edit-outline"></nb-icon>
    </button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}

@Component({
  selector: 'ngx-button-delete',
  template: `
    <button (click)="onClick()" nbButton ghost status="danger" size="tiny">
      <nb-icon icon="trash-2-outline"></nb-icon>
    </button>
  `,
})
export class ButtonDeleteComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  settings = {
    /*    add: {
          addButtonContent: '<i class="nb-plus"></i>',
          createButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
        },
        edit: {
          editButtonContent: '<i class="nb-edit"></i>',
          saveButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
        },
        delete: {
          deleteButtonContent: '<i class="nb-trash"></i>',
          confirmDelete: true,
        },*/
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        width: '30px',
        sort: true,
      },
      firstname: {
        title: 'Firstname',
        type: 'string',
      },
      lastname: {
        title: 'Lastname',
        type: 'string',
      },
      middlename: {
        title: 'Middlename',
        type: 'string',
      },
      iin: {
        title: 'IIN',
        type: 'string',
      },
      button: {
        title: (this.roleService.hasRole('ROLE_ADMIN') || this.roleService.hasRole('ROLE_PM')) ? 'Edit' : '',
        type: 'custom',
        width: '20px',
        filter: false,
        renderComponent: !(this.roleService.hasRole('ROLE_ADMIN') || this.roleService.hasRole('ROLE_PM')) ? null : ButtonViewComponent,
        onComponentInitFunction: (instance) => {
          instance.save.subscribe(row => {
            this.openModal(row.id);
          });
        },
      },
      button2: {
        title: (this.roleService.hasRole('ROLE_ADMIN')) ? 'Delete' : '',
        type: 'custom',
        width: '20px',
        filter: false,
        renderComponent: (!this.roleService.hasRole('ROLE_ADMIN')) ? null : ButtonDeleteComponent,
        onComponentInitFunction: (instance) => {
          instance.save.subscribe(row => {
            this.delete(row.id);
          });
        },
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      /*      custom: [
              {
                name: 'view',
                title: '<i class="nb-edit"></i>',
              },
              ],*/
    },
    pager: {
      display: true,
    },
  };

  source: LocalDataSource = new LocalDataSource();
  users: Profile[] = [];
  roles: string[] = [];
  constructor(private userService: UserService,
              private dialogService: NbDialogService,
              private toast: ToastService,
              private roleService: RoleService) {
  }

  ngOnInit() {
    this.fetchAll();
  }

  fetchAll() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      this.source.load(this.users);
    },
      err => {
        this.toast.error('Data not loaded', 'cloud-download-outline');
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  delete(id) {
    if (confirm('Delete user?')) {
      this.userService.getByProfileId(id).subscribe(perf => {
        const user = <User>perf;
        this.userService.delete(user.id).subscribe(perfo => {
          this.toast.success('User deleted', 'person-remove-outline');
        });
      });

    } else {
      return false;
    }
  }

  openModal(id) {
    this.dialogService.open(ModalComponent, {
      context: {
        id: id,
      },
    });
  }

}
