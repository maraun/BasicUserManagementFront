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
/*
  localhost:8080/api/profile/profile/search?keyword=henr
*/
  constructor(public http: HttpClient) { }

  public current(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/current`);
  }
  public getByProfileId(id): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/pid/${id}`);
  }
   public findAll(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrl2);
  }
  public findByKeyword(text: string): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.apiUrl2}/search?keyword=${text}`);
  }
  public findAllByRole(id): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/rid/${id}`);
  }
  public update(user: User): Observable<User> {
    return this.http.put<User>(this.apiUrl, user);
  }
  public save(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  public delete(id: number) {
    return this.http.delete(`${this.	apiUrl}/${id}`);
  }
}
