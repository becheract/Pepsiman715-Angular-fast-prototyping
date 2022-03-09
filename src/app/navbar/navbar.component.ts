import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;
  constructor() { 
    this.user = new User();
    //
    setInterval(() =>{
      let tmpUser = sessionStorage.getItem('user')
      if(tmpUser != null){
        this.user = JSON.parse(tmpUser);
      }
    }, 1000)
  }

  ngOnInit(): void {
  }

  signOut() : void {
    sessionStorage.removeItem('user');
    this.user = new User();
  }
}
