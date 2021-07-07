import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from 'src/app/model/campaign';
import { CurrentUser } from 'src/app/model/current-user';
import { Post } from 'src/app/model/post';
import { User } from 'src/app/model/user.model';
import { CampaignService } from 'src/app/services/campaign.service';
import { PostService } from 'src/app/services/post.service';
import { ProfileInteractionService } from 'src/app/services/profile-interaction.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

  username: string = ""
  user: User = new User()
  isPrivate: Boolean = false
  isBlocked: Boolean = false
  iAmBlocked: Boolean = false
  notFollowing: Boolean = false
  reported: Boolean = false

  loggedUser: CurrentUser;

  public posts: Post[] =[];
  public campaigns: Campaign[] = []



  constructor(  private route: ActivatedRoute, private profileInteractionService: ProfileInteractionService, private postService: PostService, private campaignService: CampaignService) {
    this.username =
    this.route.snapshot.paramMap.get('username') !== null
      ? '' + this.route.snapshot.paramMap.get('username')
      : '-1';

      console.log(this.username)
      this.searchUser()

   }

  ngOnInit(): void {
    this.isPrivate = false
    this.isBlocked = false
    this.iAmBlocked = false
    this.loggedUser = JSON.parse(
      localStorage.getItem('currentUser'));
    

  }

  mute() {
    this.profileInteractionService.mute(this.user.id).subscribe(
      (user) => {
       alert("User successfully muted")
      }
    ,
    (err:Error) => {
       console.log(err)
      
       
    });
  }

  block() {
    this.profileInteractionService.block(this.user.id).subscribe(
      (user) => {
       alert("User successfully blocked")
      }
    ,
    (err:Error) => {
       console.log(err)
      
       
    });
  }

  report() {
    this.profileInteractionService.report(this.user.id).subscribe(
      (user) => {
       alert("User successfully reported")
      }
    ,
    (err:Error) => {
       console.log(err)
      
       
    });
  }


  searchUser() {
    this.profileInteractionService.searchUser(this.username).subscribe(
      (user) => {
        console.log(this.user)
        this.user = user

        this.getPosts();

        if (this.user.iAmBlocked == true) {
          console.log("1")
          this.iAmBlocked = true;
        }
        if (this.user.blocked == true) {
          console.log("2")
          this.isBlocked = true;
        }

        if (user.following == false && this.user.isPrivate) {
          console.log("3")
          this.isPrivate = true         
          // alert('You have successfully searched user ' + this.user.username)
        }

        alert(this.user.following)
        if (this.user.following == false) {
          this.notFollowing = true

        }

        if (this.user.following == false && this.user.isPrivate == false) {
          console.log("4")
          this.isPrivate = false
        }
      
        if (this.user.reported) {
          this.reported = true
        }
       
        
        else {
          // alert("User is private")
        }


      }
    ,
    (err:Error) => {
       console.log(err)
      
       
    });
    
  }

  follow() {
    this.profileInteractionService.follow(this.user.id).subscribe(
      (user) => {
        if (user == false) {
          alert("Follow request successfully sent")
        } else {
          alert("Successfully followed user")
        }
       
      }
    ,
    (err:Error) => {
       console.log(err)
      
       
    });
  }

  disable(){
    alert(this.user.username)
    this.postService.disable(this.user.username).subscribe(
      (response) => {
       console.log(response)
        alert("User successfully disabled")
       
       
      }
    ,
    (err:Error) => {
       console.log(err)
      
       
    });
  }

  getPosts() {
   
    console.log('uslo u get posts');
    this.postService.getPosts(this.user.username).subscribe(
      ( response => {
          this.posts = response;
          console.log("postsss")
          console.log(this.posts)
          // this.posts = await this.downloadPhotos(response)
        
      }),
      (error => {
        console.log("error")
        alert(error.error.message);
     
      })
    );
  }

  like(postId) {
    this.postService.likePost(postId).subscribe(
      (response => {
       alert('Post successfully liked')
      }),
      (error => {
        //alert(error.error.message);
     
      })
    );
  }

  dislike(postId){
    this.postService.dislikePost(postId).subscribe(
      (response => {
       alert('Post successfully disliked')
      }),
      (error => {
        //alert(error.error.message);
     
      })
      );
  }

  save(postId){
    this.postService.savePost(postId).subscribe(
      (response => {
       alert('Post successfully saved')
      }),
      (error => {
        //alert(error.error.message);
     
      })
      );
  }

  reportPost(postId){
    this.postService.reportPost(postId).subscribe(
      (response => {
       alert('Post successfully reported')
      }),
      (error => {
        //alert(error.error.message);
     
      })
      );
  }

 


}