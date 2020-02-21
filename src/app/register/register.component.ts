import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }

  handleRegister({ username, password }: { username: string, password: string }) {
    console.log(username);
    this.userService.register(username, password).subscribe((user) => {
      console.log(user);
      this.router.navigate(['/login']);
    }, eror => {
      alert('Username already exists!');
    });
  }

}
