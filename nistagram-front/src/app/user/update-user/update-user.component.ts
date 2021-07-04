import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/dto/user-dto';
import { AuthenticationService } from 'src/app/security/authentication-service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  public userDto: UserDto = new UserDto()
  
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.getLoggedUser()
  }

  getLoggedUser() {
    this.authenticationService.getLoggedUser().subscribe(
      (loggedIn) => {
        this.userDto = loggedIn
        this.userDto.password = ""
      }
    ,
    (err:Error) => {

       alert('Error while getting logged user.')

    });
  }

  saveUser(){
    this.authenticationService.saveUser(this.userDto).subscribe(
      (loggedIn) => {
        alert("Successfully updated profile information")
      }
    ,
    (err:Error) => {

       alert('Error while updating profile information')

    });
  }

}
