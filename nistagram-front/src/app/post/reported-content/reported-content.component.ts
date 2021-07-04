import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-reported-content',
  templateUrl: './reported-content.component.html',
  styleUrls: ['./reported-content.component.css']
})
export class ReportedContentComponent implements OnInit {

  public posts: Post[] =[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getReportedPosts()
  }

  getReportedPosts() {
   
    console.log('uslo u get reported posts');
    this.postService.getReportedPosts().subscribe(
      (async response => {
        if (response !== null) {
          this.posts = response;
          // this.posts = await this.downloadPhotos(response)
          /*
          this.professions.push(this.professions[0]);
          this.professions.push(this.professions[0]);
          this.professions.push(this.professions[0]);
          this.professions.push(this.professions[0]);
          console.log(this.professions[0].image);
          */
        }
      }),
      (error => {
        //alert(error.error.message);
     
      })
    );
  }

  delete(postId){
    this.postService.deleteReportedPost(postId).subscribe(
      (response => {
       alert('Post successfully deleted')
      }),
      (error => {
        //alert(error.error.message);
     
      })
      );
  }

}
