import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Getapi1Service {

  constructor(public _http: HttpClient) { }

  getdata<T> (url :string){
  url= 'http://universities.hipolabs.com/search?country=United+Kingdom'

  return this._http.get<T[]>(url);
  }

  getdata2<T>(url:string){
    url= 'https://api2.binance.com/api/v3/ticker/24hr'
    return this._http.get<T[]>(url);
  }

  getdata3<T>(url:string){
    url= 'http://universities.hipolabs.com/search?country=Chile'
    return this._http.get<T[]>(url);
  }

  getdata4<T>(url:string){
    url= 'http://universities.hipolabs.com/search?country=Canada'
    return this._http.get<T[]>(url);
  }

  getdata5<T>(url:string){
    url= 'http://universities.hipolabs.com/search?alpha_two_code=US'
    return this._http.get<T[]>(url);
  }
}




