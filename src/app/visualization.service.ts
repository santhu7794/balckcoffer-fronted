import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisualizationService {

  constructor(private http:HttpClient) { }
  visualdata(data:any){
    return this.http.post('http://localhost:4400/black/addvisual', data);
  }
  getdata(){
return this.http.get('http://localhost:4400/black/view')
  }
}
