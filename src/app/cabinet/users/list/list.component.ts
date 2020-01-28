import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {UserService} from '../../../@core/services/user.service';
import {User} from '../../../@core/models/profile/user';
import {Profile} from '../../../@core/models/profile/profile';

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
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.fetchAll();
  }
  fetchAll() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      this.source.load(this.users);
    });
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
