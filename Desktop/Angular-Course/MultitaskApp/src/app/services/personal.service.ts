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
    return this.http.get<GenderData>('https://api.nationalize.io', {
      params: new HttpParams().set('name', name),
    });
  }
}
