import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../home/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }


  baseUrl = environment.baseUrl;

  public Users() {
    return this.http.get<any>(`${this.baseUrl}`+ "todos")
  
  }

  // ////////////////////////////////////////////////////////////////////////////////////////////////


  url = "http://localhost:3000/todos";

 
  getcall(){
    return this.http.get(this.url)
  }
  adduser(data: any){
    // console.log("data",data);
    return this.http.post(this.url,data);

  
  }}
