import { Injectable } from '@angular/core';
import {NbIconConfig, NbToastrService} from '@nebular/theme';

@Injectable({providedIn: 'root'})

export class ToastService {

  constructor(private toastrService: NbToastrService) { }
  success(text, icon) {
    const iconConfig: NbIconConfig = {icon: icon, pack: 'eva', status: 'success'};
    this.toastrService.show(text, `Success`, iconConfig);
  }

  error(text, icon) {
    const iconConfig: NbIconConfig = {icon: icon, pack: 'eva', status: 'success'};
    this.toastrService.show(text, `Error`, iconConfig);
  }

  warning(text, icon) {
    const iconConfig: NbIconConfig = {icon: icon, pack: 'eva', status: 'success'};
    this.toastrService.show(text, `Warning`, iconConfig);
  }
}
