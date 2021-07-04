import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { LikedPostsComponent } from './liked-posts/liked-posts.component';
import { DislikedPostsComponent } from './disliked-posts/disliked-posts.component';
import { ReportedContentComponent } from './reported-content/reported-content.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';


@NgModule({
    declarations: [LikedPostsComponent, DislikedPostsComponent, ReportedContentComponent, CreateCampaignComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        RouterModule,
        MatGridListModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
    ]
})
export class PostModule { }