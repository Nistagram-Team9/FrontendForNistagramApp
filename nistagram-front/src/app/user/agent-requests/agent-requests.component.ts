import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-agent-requests',
  templateUrl: './agent-requests.component.html',
  styleUrls: ['./agent-requests.component.css']
})
export class AgentRequestsComponent implements OnInit {

  agentRequests = []

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAgentRequests()
  }

  getAgentRequests(){
    this.postService.getAgentRequests().subscribe(
      (agentRequests) => {
        this.agentRequests = agentRequests
       alert("success")
      }
    ,
    (err:Error) => {
       console.log(err)
      
       
  })
}
acceptAgentRequest(username) {
  this.postService.acceptAgentRequest(username).subscribe(
    (agentRequest) => {
      alert("Succesfully accepted agent request")
      // console.log(followRequests)
    //  alert("User follow requests")
    }
  ,
  (err:Error) => {
     console.log(err)
    
     
})
}

}
