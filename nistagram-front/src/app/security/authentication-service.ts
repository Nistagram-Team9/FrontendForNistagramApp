import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { map } from "rxjs/operators";
import { catchError } from "rxjs/operators";
import { JwtUtilsService } from './jwt-utils.service';

import { analyzeAndValidateNgModules } from '@angular/compiler';
import { UserDto } from '../dto/user-dto';

@Injectable()
export class AuthenticationService {


    private readonly baseUrl = "http://localhost:8888/users";

//   private readonly loginPath = "http://localhost:8888/users/login";
  private readonly getUser = "http://localhost:8080/auth/login";

  constructor(private http: HttpClient, private jwtUtilsService: JwtUtilsService) { }

  

  login(username: string, password: string) {

  
    console.log('login called');
    var headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl + "/login", JSON.stringify({ username, password }), { headers }).pipe(
      map( (
        (res: any) => {
          console.log(res['accessToken']);
          console.log(res['userRoleName']);
          console.log("1");
          let token = res && res['accessToken'];
          console.log("2");
          if (token) {
            console.log("3");
            localStorage.setItem('currentUser', JSON.stringify({
           
              userRoleName: res['userRoleName'],
              // userRoleName: "ROLE_AGENT",
              token: res['accessToken']
            }));
            console.log("4");
          }          
      }
      ) 
      ) 
      );

  }

  registerUser(userDto : UserDto) : Observable<any>{
    return this.http.post<UserDto>(`${this.baseUrl}`+'/register-user', userDto);
  }

  registerAdmin(userDto : UserDto) : Observable<any>{
    return this.http.post<UserDto>(`${this.baseUrl}`+'/register-admin', userDto);
  }

  registerAgent(userDto : UserDto) : Observable<any>{
    return this.http.post<UserDto>(`${this.baseUrl}`+'/register-agent', userDto);
  }

  getLoggedUser() : Observable<any>{
    return this.http.get<UserDto>(`${this.baseUrl}`+'/get-logged');
  }

  saveUser(userDto : UserDto) : Observable<any>{
    return this.http.put<UserDto>(`${this.baseUrl}`, userDto);
  }

  getToken(): String {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser!==null){
      return currentUser['token'];
    }
   
    return "";
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    if (this.getToken() != '') return true;
    else return false;
  }

  getCurrentUser() {
    if (localStorage.currentUser) {
      return JSON.parse(localStorage.currentUser);
    }
    else {
      return undefined;
    }
  }

}
