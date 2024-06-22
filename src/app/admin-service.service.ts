import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }
  adminLogin(data: any) {
    return this.http.post('http://localhost:4400/admin/login', data);
  }
}
