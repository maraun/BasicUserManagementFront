import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/profile/user';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Profile} from '../models/profile/profile';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiUrl + '/api/profile/users';
  apiUrl2 = environment.apiUrl + '/api/profile/profile';
  constructor(public http: HttpClient) { }

  public current(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/current`);
  }
   public findAll(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrl2);
  }
}