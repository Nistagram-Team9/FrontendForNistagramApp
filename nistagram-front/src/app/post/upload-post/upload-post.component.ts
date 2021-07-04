import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.css']
})
export class UploadPostComponent implements OnInit {

  description: string;
  tags: string;
  private currentFile: File;


  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  public onFileChanged(event) {
    this.currentFile = event.target.files[0];
  }

  uploadPost() {
    console.log("description from upload post")
    console.log(this.description);
    // this.postService.uploadPost(this.description, this.tags, this.currentFile)
    //   .subscribe(data => { alert(data.message); })

    this.postService.uploadPost(this.description, this.tags, this.currentFile).subscribe(
      (loggedIn) => {
        alert("Successfully uploaded post")
        location.reload();
      }
    ,
    (err:Error) => {

        alert('Error while uploading post')

    });
  }

}
