import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/model/current-user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userToSearch: String = ""
  loggedUser: CurrentUser;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loggedUser = JSON.parse(
      localStorage.getItem('currentUser'));
      

  }

  trending(){
    this.router.navigate(['/dashboard/trending']);

  }

  searchProfiles(){
    alert(this.userToSearch)
    this.router.navigate(['/dashboard/show-profile/'+this.userToSearch]);
    // location.reload()
  }

  updateProfile(){
    this.router.navigate(['/dashboard/update-profile']);
  }

  followRequests(){
    this.router.navigate(['/dashboard/follow-requests']);
  }

  logout(){

  }

  upload(){
    this.router.navigate(['/dashboard/upload-post']);
  }

  myPhotos() {
    this.router.navigate(['/dashboard/show-posts']);
  }

  likedContent(){
    this.router.navigate(['/dashboard/liked-posts']);
  }

  dislikedContent(){
    this.router.navigate(['/dashboard/disliked-posts']);
  }

  registerAgent(){
    this.router.navigate(['/registerAgent']);

  }

  agentRequests(){
    this.router.navigate(['dashboard/agent-requests']);
  }

  reportedContent() {
    this.router.navigate(['dashboard/reported-content']);
  }

  createCampaign() {
    this.router.navigate(['dashboard/create-campaign']);

  }
}
