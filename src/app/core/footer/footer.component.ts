import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/user/users.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  get isLogged() { return this.userService.isLogged; }

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

}
