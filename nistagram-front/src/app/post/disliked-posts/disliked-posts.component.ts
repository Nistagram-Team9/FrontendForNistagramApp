import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-disliked-posts',
  templateUrl: './disliked-posts.component.html',
  styleUrls: ['./disliked-posts.component.css']
})
export class DislikedPostsComponent implements OnInit {

  public posts: Post[] =[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
   
    console.log('uslo u get posts');
    this.postService.getDislikedPosts().subscribe(
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
}
