import { Component, OnInit } from '@angular/core';
import { Campaign } from '../model/campaign';
import { Post } from '../model/post';
import { CampaignService } from '../services/campaign.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  public posts: Post[] =[];
  public campaigns: Campaign[] = []

  constructor(private campaignService: CampaignService, private postService: PostService) { }

  ngOnInit(): void {
    this.getCampaignsForMe()
    this.getTrendingPosts()
  }

  getCampaignsForMe() {
  
    console.log('uslo u show campaigns for me');
    this.campaignService.getCampaignsForMe().subscribe(
      (async response => {
        if (response !== null) {
          this.campaigns = response
          console.log(response)
         alert("successfully got campaigns fore me");
        }
      }),
      (error => {
        //alert(error.error.message);
      
      })
    );
  }

  getTrendingPosts() {
   
    console.log('uslo u get posts');
    this.postService.getFollowersPosts().subscribe(
      (async response => {
        if (response !== null) {
          this.posts = response;
          // this.posts = await this.downloadPhotos(response)
        }
      }),
      (error => {
        //alert(error.error.message);
     
      })
    );
  }
}
