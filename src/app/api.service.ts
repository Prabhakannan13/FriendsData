import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hhtp:HttpClient) { }
  viewData=()=>{
    return this.hhtp.get("http://dummyapifriends.herokuapp.com/view")
  }
  adddata=(data:any)=>{
    return this.hhtp.post("https://dummyapifriends.herokuapp.com/adddata",data)
  }
}
