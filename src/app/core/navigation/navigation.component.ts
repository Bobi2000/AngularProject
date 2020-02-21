import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/user/users.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

get isLogged() { return this.userService.isLogged; }

get isAdmin() { return this.userService.isAdmin; }

get username() { return this.userService.currentUser.username; }

  constructor(private userService: UsersService) { }

  ngOnInit() {

  }

  logout() {
    this.userService.logout();
  }

}
