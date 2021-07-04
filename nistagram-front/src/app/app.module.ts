import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { CanActivateAuthGuard } from './security/can-activate-auth.guard';
import { JwtUtilsService } from './security/jwt-utils.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './security/token-interceptor.service';
import { UserModule } from './user/user.module';
import { MessageBoxComponent } from './message-box/message-box.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthenticationService } from './security/authentication-service';
import { TrendingComponent } from './trending/trending.component';
import { ProfileInteractionService } from './services/profile-interaction.service';
import { UploadPostComponent } from './post/upload-post/upload-post.component';
import { PostModule } from './post/post.module';
import { FormsModule } from '@angular/forms';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { ShowPostsComponent } from './post/show-posts/show-posts.component';
import { TrendingModule } from './trending/trending.module';

@NgModule({
  declarations: [
    AppComponent,
    MessageBoxComponent,
    UploadPostComponent,
    ShowPostsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    UserModule,
    DashboardModule,
    PostModule,
    MatGridListModule,
    TrendingModule
  ],
  providers: [
    DatePipe,
    CanActivateAuthGuard,
    JwtUtilsService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    ProfileInteractionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
