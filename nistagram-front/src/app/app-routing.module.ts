import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { RegisterAgentComponent } from './user/register-agent/register-agent.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DatePipe } from '@angular/common';
import { CanActivateAuthGuard } from './security/can-activate-auth.guard';
import { JwtUtilsService } from './security/jwt-utils.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './security/token-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { TrendingComponent } from './trending/trending.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { ShowProfileComponent } from './user/show-profile/show-profile.component';
import { FollowRequestsComponent } from './user/follow-requests/follow-requests.component';
import { UploadPostComponent } from './post/upload-post/upload-post.component';
import { ShowPostsComponent } from './post/show-posts/show-posts.component';
import { LikedPostsComponent } from './post/liked-posts/liked-posts.component';
import { DislikedPostsComponent } from './post/disliked-posts/disliked-posts.component';
import { AgentRequestsComponent } from './user/agent-requests/agent-requests.component';
import { ReportedContentComponent } from './post/reported-content/reported-content.component';
import { CreateCampaignComponent } from './post/create-campaign/create-campaign.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registerUser',
    component: RegisterUserComponent,
  },
  {
    path: 'registerAgent',
    component: RegisterAgentComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'trending',
        component: TrendingComponent,
      },
      {
        path: 'update-profile',
        component: UpdateUserComponent,
      },
      {
        path: 'show-profile/:username',
        component: ShowProfileComponent,
      },
      {
        path: 'follow-requests',
        component: FollowRequestsComponent,
      },
      {
        path: 'upload-post',
        component: UploadPostComponent,
      },
      {
        path: 'show-posts',
        component: ShowPostsComponent,
      },
      {
        path: 'liked-posts',
        component: LikedPostsComponent,
      },
      {
        path: 'disliked-posts',
        component: DislikedPostsComponent,
      },
      {
        path: 'agent-requests',
        component: AgentRequestsComponent,
      },
      {
        path: 'reported-content',
        component: ReportedContentComponent,
      },
      {
        path: 'create-campaign',
        component: CreateCampaignComponent,
      },
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [
    DatePipe,
    CanActivateAuthGuard,
    JwtUtilsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
})

export class AppRoutingModule { }
