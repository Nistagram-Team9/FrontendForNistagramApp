import { Component, OnInit } from '@angular/core';
import { ProfileInteractionService } from 'src/app/services/profile-interaction.service';

@Component({
  selector: 'app-follow-requests',
  templateUrl: './follow-requests.component.html',
  styleUrls: ['./follow-requests.component.css']
})
export class FollowRequestsComponent implements OnInit {

  followRequests = []
  constructor(private profileInteractionService: ProfileInteractionService) { }

  ngOnInit(): void {
    this.getFollowRequests()
  }

  getFollowRequests(){
    this.profileInteractionService.getFollowRequests().subscribe(
      (followRequests) => {
        this.followRequests = followRequests
        // console.log(followRequests)
      //  alert("User follow requests")
      }
    ,
    (err:Error) => {
       console.log(err)
      
       
  })
}

accept(id) {
  this.profileInteractionService.acceptFollowRequests(id).subscribe(
    (followRequests) => {
      alert("success")
      // console.log(followRequests)
    //  alert("User follow requests")
    }
  ,
  (err:Error) => {
     console.log(err)
    
     
})
}

}