import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FibonacciService {
  constructor(private http: HttpClient) {}

  getValues() {
    return this.http.get<any>('/api/values/current');
  }

  getIndexes() {
    return this.http.get<any>('/api/values/all');
  }

  postValue(newValue: number): Observable<any> {
    return this.http.post<any>('/api/values', { index: newValue });
  }
}
