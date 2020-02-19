import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {

  }

  login(username: string, password: string) {
    this.userService.login(username, password);
    this.router.navigate(['']);
  }

}
