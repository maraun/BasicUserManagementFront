import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Role} from '../models/profile/role';
import {TokenStorageService} from '../../auth/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  apiUrl = environment.apiUrl + '/api/profile/roles';
  roles: string[] = [];
  constructor(public http: HttpClient,
              public tokenStorage: TokenStorageService) { }
  public findAll(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl);
  }
  public getByRoleId(id): Observable<Role> {
    return this.http.get<Role>(`${this.apiUrl}/${id}`);
  }
  public hasRole (checkRole): boolean {
    this.roles = this.tokenStorage.getAuthorities();
    if (this.roles.includes(checkRole)) {
      return true;
    } else {
      return false;
    }
  }

}
