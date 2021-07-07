import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly baseUrl = "http://localhost:8881/posts";
  private readonly baseUrlAdmin = "http://localhost:8881/admin";


  constructor(private http: HttpClient) { }

  uploadPost(description: string, tags: string, photo: File) : Observable<any>{
    console.log(description)
    const data : FormData  = new FormData()
    data.append("description", description);
    data.append("tags", tags)
    data.append("file", photo)
    return this.http.post<Post>(`${this.baseUrl}`, data);
  }

  likePost(id: number) : Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/like/` + String(id), null)
  }

  savePost(id: number) : Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/save/` + String(id), null)
  }

  dislikePost(id: number) : Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/dislike/` + String(id), null)
  }

  reportPost(id: number) : Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/report/` + String(id), null)
  }

  getPosts(username: string) : Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`+'/view/'+username);
  }

  viewMyPosts() : Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`+'/view-my-posts');
  }
  getFollowersPosts() : Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`+'/followers');
  }

  getLikedPosts() : Observable<any>{
    return this.http.get<Post>(`${this.baseUrl}`+'/liked');
  }

  getReportedPosts() : Observable<any>{
    return this.http.get<Post>(`${this.baseUrlAdmin}`+'/reported');
  }


  getDislikedPosts() : Observable<any>{
    return this.http.get<Post>(`${this.baseUrl}`+'/disliked');
  }


  downloadPhoto(id: number) {
    return this.http.get(`${this.baseUrl}`+'/download-image/'+ String(id), {responseType: 'blob'}) as Observable<any>;
  }

  comment(id: number, comment: string) {
    return this.http.post(`${this.baseUrl}`+'/comment/'+ String(id) + "/"+comment, null);
  }

  getAgentRequests() : Observable<any>{
    return this.http.get<User>(`${this.baseUrlAdmin}`+'/agent-requests');
  }

  acceptAgentRequest(username: string) : Observable<any>{
    return this.http.post<User>(`${this.baseUrlAdmin}`+'/accept-agent/'+username, null);
  }
  disable(username: string) : Observable<any>{
    return this.http.post<any>(`${this.baseUrlAdmin}`+'/disable/'+username, null);
  }
  deleteReportedPost(id: number) : Observable<any>{
    return this.http.delete<any>(`${this.baseUrlAdmin}`+'/'+id);
  }

}
