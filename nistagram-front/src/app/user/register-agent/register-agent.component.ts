import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/dto/user-dto';
import { AuthenticationService } from 'src/app/security/authentication-service';

@Component({
  selector: 'app-register-agent',
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.css']
})
export class RegisterAgentComponent implements OnInit {

  public userDto: UserDto = new UserDto()

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  submit(){
   
    // if (this.userDto.email === '' || this.userDto.name === '' || this.userDto.surname == "" || this.userDto.username == "" || this.userDto.password == "" || this.userDto.website == "") {
    //   alert("All fields must be filled.")

    // } else {
    //   // this.router.navigate(['/dashboard']);
    //    this.authenticationService.registerAgent(this.userDto).subscribe(
    //      (loggedIn) => {
    //        alert('You have successfully registered')
    //        this.router.navigate(['/login']);
    //      }
    //    ,
    //    (err:Error) => {
    //       console.log(err)
    //       alert('User with that username already exists')
        
          
    //    });
    // }

    
    this.authenticationService.registerAgent(this.userDto).subscribe(
      (loggedIn) => {
        alert('You have successfully registered')
        this.router.navigate(['/login']);
      }
    ,
    (err:Error) => {
       console.log(err)
       alert('User with that username already exists')
     
       
    });
    
  }

}
