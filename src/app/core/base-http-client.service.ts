import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseHttpClientService {

  constructor(private http: HttpClient) { }

  public getJson(path: string): Observable<any> {
    return this.http.get(`http://localhost:4200/assets/${path}.json`);
  }
}
