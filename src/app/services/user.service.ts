import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiUrl + '/api/users';
  constructor(public http: HttpClient) { }

  public current(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/current`);
  }
   public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
