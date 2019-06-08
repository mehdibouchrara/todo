import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private registerUserUrl = "http://localhost:3000/user/subscribe";

  private loginUserUrl = "http://localhost:3000/user/login";

 // private loginUserUrl = "http://localhost:3000/user/add";



  constructor(private http:HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this.registerUserUrl,user);
  }
  loginUser(user){
    return this.http.post<any>(this.loginUserUrl,user);
  }
}
