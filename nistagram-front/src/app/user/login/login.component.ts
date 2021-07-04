import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { JwtAuthenticationRequest } from 'src/app/model/jwt-authentication-request.model';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/security/authentication-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public authRequest: JwtAuthenticationRequest = {
    username: '',
    password: ''
  }

  constructor(private router: Router, private modalService: NgbModal, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  login() {
    console.log("Uslo u login")
    console.log(this.authRequest.username)
    console.log(this.authRequest.password)
    if (this.authRequest.username === '' || this.authRequest.password === '') {
      const modalRef = this.modalService.open(MessageBoxComponent);
      modalRef.componentInstance.success = false;
      modalRef.componentInstance.message = 'Username and password are not allowed to be blank!'

    } else {
      // this.router.navigate(['/dashboard']);
       this.authenticationService.login(this.authRequest.username, this.authRequest.password).subscribe(
         (loggedIn) => {
          //  location.reload();
           this.router.navigate(['/dashboard']);
         }
       ,
       (err:Error) => {

          alert('Wrong password or username')
        
          
       });
    }

  }

}
