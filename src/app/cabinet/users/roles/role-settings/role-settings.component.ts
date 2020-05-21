import { Component, OnInit } from '@angular/core';
import {RolesComponent} from "../roles.component";

@Component({
  selector: 'ngx-role-settings',
  templateUrl: './role-settings.component.html',
  styleUrls: ['./role-settings.component.scss'],
})
export class RoleSettingsComponent implements OnInit {

  constructor(private rolesComponent: RolesComponent) { }

  ngOnInit() {

  }

}
