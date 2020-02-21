import { Component } from '@angular/core';
import { UsersService } from './user/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UsersService) {
    // const currentUser = localStorage.getItem('current-user');
    // if (currentUser != null) {
    //  console.log(JSON.parse(currentUser).username + " " + JSON.parse(currentUser).password);
    //  userService.login(JSON.parse(currentUser).username, JSON.parse(currentUser).password);
    // }
  }
}
