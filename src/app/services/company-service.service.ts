import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompanyServiceService {
  constructor(public http: HttpClient) {}

  getCompanies() {
    this.http
      .get('https://my-json-server.typicode.com/zoelounge/menupizza/companies')
      .subscribe((res) => {
        console.log('res is: ', res);
      });
  }
}
