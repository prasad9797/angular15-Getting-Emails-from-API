import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../interfaces/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GetDataService {
  private readonly apiURL = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}

  getData(): Observable<string[]> {
    return this.http
      .get<Data>(this.apiURL)
      .pipe(map((response: Data) => response.data.map((user) => user.email)));
  }
}
