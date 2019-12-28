import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:8080/api/users';
  constructor(public http: HttpClient) { }

  public current(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/current`);
  }
}
