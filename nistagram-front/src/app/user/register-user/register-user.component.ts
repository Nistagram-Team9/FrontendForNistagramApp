import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDto } from 'src/app/dto/user-dto';
import { AuthenticationService } from 'src/app/security/authentication-service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  private userType: string;

  public userDto: UserDto = new UserDto()

  constructor(private route: Router, private router: ActivatedRoute, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.userType = this.router.snapshot.params.type;
  }


  submit(){
   this.userDto.website=""
    if (this.userDto.email === '' || this.userDto.name === '' || this.userDto.surname == "" || this.userDto.username == "" || this.userDto.password == "" ) {
      alert("All fields must be filled.")

    } else {
      // this.router.navigate(['/dashboard']);
       this.authenticationService.registerUser(this.userDto).subscribe(
         (loggedIn) => {
           alert('You have successfully registered')
           this.route.navigate(['/login']);

          //  location.reload();
          //  this.router.navigate(['/dashboard']);
         }
       ,
       (err:Error) => {
          console.log(err)
          alert('User with that username already exists')
        
          
       });
    }
  }
}
