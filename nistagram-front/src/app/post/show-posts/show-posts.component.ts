import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Campaign } from 'src/app/model/campaign';
import { CurrentUser } from 'src/app/model/current-user';
import { Post } from 'src/app/model/post';
import { CampaignService } from 'src/app/services/campaign.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css']
})
export class ShowPostsComponent implements OnInit {

  public posts: Post[] =[];
  public campaigns: Campaign[] = []
  public postUrl: any
  public comment: any
  public loggedUser: CurrentUser

  public urlDownloadImage = "http://localhost:8881/posts/download-image/14"

  constructor(private postService: PostService, private sanitizer:DomSanitizer, private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.getPosts();
    this.urlDownloadImage = "http://localhost:8881/posts/download-image/14"
    this.loggedUser = JSON.parse(
      localStorage.getItem('currentUser'));

    if (this.loggedUser.userRoleName == "ROLE_AGENT") {
      this.getCampaigns();
    }
  }

  setDefaultPic($event){
    alert($event)
  }

  showPicture() : string{
   
    const photo = this.postService.downloadPhoto(14).toPromise();

    let objectURL = URL.createObjectURL(photo); 
    this.postUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    // tmpArray[index].photo =  this.sanitizer.bypassSecurityTrustUrl(objectURL);
    // alert(objectURL)

    // return  "http://localhost:8881/posts/download-image/14"
    return this.postUrl
  }


  getPosts() {
   
    console.log('uslo u get posts');
    this.postService.getPosts("maki").subscribe(
      (async response => {
        if (response !== null) {
          this.posts = response;
          console.log(this.posts)
        
          // alert(this.posts)
          // this.posts = await this.downloadPhotos(response)
        }
      }),
      (error => {
        //alert(error.error.message);
     
      })
    );
  }


  photoURL() {
    return this.sanitizer.bypassSecurityTrustUrl(this.urlDownloadImage);
  }
  async downloadPhotos(data){
    let tmpArray = data;
    for (let index = 0; index < tmpArray.length; index++){
      const photo = await this.postService.downloadPhoto(tmpArray[index].id).toPromise();
      // var reader = new FileReader()
      // reader.readAsDataURL(photo);
      // // tmpArray[index].photo = reader.result
      // reader.onload = () => {
      //   tmpArray[index].photo = reader.result
      //   this.postUrl = reader.result
      // };

      let objectURL = URL.createObjectURL(photo); 
      this.postUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      tmpArray[index].photo =  this.sanitizer.bypassSecurityTrustUrl(objectURL);
      // alert(objectURL)

      // .subscribe((blob : any) => {
      //   let objectURL = URL.createObjectURL(blob);       
      //   this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);

      // this.postService.downloadPhoto(this.posts[index].id).subscribe(
      //   (response => {
      //     if (response !== null) {
      //       var reader = new FileReader()
      //       reader.readAsDataURL(response);
      //       reader.onload = () => {
      //         this.posts[index].photo = reader.result
      //         alert('result')
      //       };
           
         
      //     }
      //   }),
      //   (error => {
      //     //alert(error.error.message);
       
      //   })
      // );
    }
    return tmpArray
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

  report(postId){
    this.postService.reportPost(postId).subscribe(
      (response => {
       alert('Post successfully reported')
      }),
      (error => {
        //alert(error.error.message);
     
      })
      );
  }

  addComment(postId){
    this.postService.comment(postId, this.comment).subscribe(
      (response => {
        console.log(response);
       alert('Post successfully commented')
      }),
      (error => {
        //alert(error.error.message);
     
      })
      );
  }


  getCampaigns() {
  
    console.log('uslo u get posts');
    this.campaignService.getMyCampaigns().subscribe(
      (async response => {
        if (response !== null) {
          this.campaigns = response
          console.log(response)
         alert("successfully got my campaigns");
        }
      }),
      (error => {
        //alert(error.error.message);
      
      })
    );
  }

  delete(campaignId) {
    this.campaignService.deleteCampaign(campaignId).subscribe(
      (async response => {
        if (response !== null) {
         
         alert("successfully deleted campaign");
        }
      }),
      (error => {
        //alert(error.error.message);
      
      })
    );
  }
}
