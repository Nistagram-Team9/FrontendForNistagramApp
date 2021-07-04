import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterAgentComponent } from './register-agent/register-agent.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { FollowRequestsComponent } from './follow-requests/follow-requests.component';
import { AgentRequestsComponent } from './agent-requests/agent-requests.component'

@NgModule({
    declarations: [LoginComponent, RegisterUserComponent, RegisterAgentComponent, UpdateUserComponent, ShowProfileComponent, FollowRequestsComponent, AgentRequestsComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        LoginComponent
    ]
})
export class UserModule { }