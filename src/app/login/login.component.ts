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

  handleLogin({ username, password }: { username: string, password: string }) {
    this.userService.login(username, password);
    /*this.userService.login(username, password).subscribe((token) => {
      console.log(token);
      this.router.navigate(['']);
    }, console.error);*/
  }

}
