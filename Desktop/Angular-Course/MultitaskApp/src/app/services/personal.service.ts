import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenderData, AgeData } from '../models/personal.models';

@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  constructor(private http: HttpClient) {}

  getGenderData(name: string): Observable<GenderData> {
    return this.http.get<GenderData>('https://api.genderize.io', {
      params: new HttpParams().set('name', name),
    });
  }
  getAgeData(name: string): Observable<AgeData> {
    return this.http.get<AgeData>('https://api.agify.io', {
      params: new HttpParams().set('name', name),
    });
  }
}
