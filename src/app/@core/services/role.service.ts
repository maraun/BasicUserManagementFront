import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Role} from '../models/profile/role';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  apiUrl = environment.apiUrl + '/api/profile/roles';
  constructor(public http: HttpClient) { }
  public findAll(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl);
  }
  public getByProfileId(id): Observable<Role> {
    return this.http.get<Role>(`${this.apiUrl}/${id}`);
  }
}
