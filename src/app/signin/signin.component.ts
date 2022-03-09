import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: User;
  authenticated = false;
  authentication_failed = false;

  constructor(private userService: UserService, private router: Router) {
    this.user = new User();

  }

  ngOnInit(): void {
  }

  getByEmail(){
    if(this.user.email.length <= 0)  {
      return;
    }

   

    this.userService.getByEmail(this.user.email).subscribe((remote_user) => {
      if(remote_user == null) {
        this.authentication_failed = true;
        return;
      }
      
      //validate user
      if(remote_user.email === this.user.email && remote_user.password === this.user.password) {
        this.authenticated = true;
        this.authentication_failed = false;
        //store user information in session and
        sessionStorage.setItem('user', JSON.stringify(remote_user));
        this.router.navigate(['/home']);
      }  else{
        //display error message
        this.authentication_failed = true;
      }
    });
  }

  onSubmit(): void {
    console.log('submitted');
    console.log(this.user.email);


    //just a test
    // this.userService.getAll().subscribe((users) => {
    //   console.log(users);
    // });
  }
}
