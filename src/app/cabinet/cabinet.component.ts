import { Component, OnInit } from '@angular/core';
import {CMENU_ITEMS} from './cabinet-menu';

@Component({
  selector: 'ngx-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss'],
})
export class CabinetComponent {

cmenu = CMENU_ITEMS;

}
