import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Citizenship} from '../models/profile/Citizenship';
import {Gender} from '../models/profile/Gender';
import {MaritalStatus} from '../models/profile/MaritalStatus';
import {Nationality} from '../models/profile/Nationality';

@Injectable({
  providedIn: 'root',
})
export class XprofileService {
apiUrl = environment.apiUrl + '/api/profile';
  constructor(public http: HttpClient) { }

  public getCitizenships(): Observable<Citizenship[]> {
    return this.http.get<Citizenship[]>(`${this.apiUrl}/citizenship`);
  }

  public getGenders(): Observable<Gender[]> {
    return this.http.get<Gender[]>(`${this.apiUrl}/gender`);
  }

  public getMaritalStatuses(): Observable<MaritalStatus[]> {
    return this.http.get<MaritalStatus[]>(`${this.apiUrl}/maritalStatus`);
  }

  public getNationalities(): Observable<Nationality[]> {
    return this.http.get<Nationality[]>(`${this.apiUrl}/nationality`);
  }
}
