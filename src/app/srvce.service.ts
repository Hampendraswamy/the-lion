import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SrvceService {

  constructor(private http:HttpClient) { }

  postmethod(){
    return this.http.get("");
  }
}
