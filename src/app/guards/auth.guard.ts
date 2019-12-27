import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from '../auth/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private tokenStorage: TokenStorageService) {
  }
  canActivate = () => {
    if (this.tokenStorage.checkAvailability()) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }

}
