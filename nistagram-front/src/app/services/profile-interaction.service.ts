import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from '../dto/user-dto';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileInteractionService {

  private readonly baseUrl = "http://localhost:9999/users";

  constructor(private http: HttpClient) { }

  searchUser(username: string) : Observable<any>{
    return this.http.get<User>(`${this.baseUrl}`+'/search/'+username);
  }

  mute(id: number) : Observable<any>{
    return this.http.get<User>(`${this.baseUrl}`+'/mute/'+id);
  }

  block(id: number) : Observable<any>{
    return this.http.get<User>(`${this.baseUrl}`+'/block/'+id);
  }

  report(id: number) : Observable<any>{
    return this.http.get<User>(`${this.baseUrl}`+'/report/'+id);
  }

  follow(id: number) : Observable<any>{
    return this.http.get<User>(`${this.baseUrl}`+'/follow/'+id);
  }

  getFollowRequests() : Observable<any>{
    return this.http.get<User>(`${this.baseUrl}`+'/follow-requests');
  }

  acceptFollowRequests(id: number) : Observable<any>{
    return this.http.get<User>(`${this.baseUrl}`+'/accept-follow-requests/' + id);
  }
}
