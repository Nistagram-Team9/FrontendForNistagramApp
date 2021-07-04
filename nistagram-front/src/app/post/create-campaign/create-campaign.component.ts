import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/services/campaign.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  public isShortTerm: any
  public startDate: any
  public endDate: any
  public howManyTimesADay: any
  public sex: string
  public ageGroup: any
  public websitesString: any
  public files = []

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
  }

  createCampaign() {
 
    // this.postService.uploadPost(this.description, this.tags, this.currentFile)
    //   .subscribe(data => { alert(data.message); })

    this.campaignService.createCampaign(this.files, this.websitesString, this.isShortTerm, this.startDate, this.endDate, this.howManyTimesADay, this.sex, this.ageGroup).subscribe(
      (loggedIn) => {
        alert("Successfully created campaign")
        // location.reload();
      }
    ,
    (err:Error) => {

        alert('Error while uploading post')

    });
  }
  onFileChanged(event) {
   
    for (let index=0; index < event.target.files.length; index++) {
      this.files.push(event.target.files[index]);

    }
 
  }

}

