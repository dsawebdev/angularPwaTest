import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTheQuote() {
    return this.http.get(' https://api.apitore.com/api/34')
  }
}
