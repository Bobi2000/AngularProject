import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  get isUser() { return this.userService.currentUser; }

  constructor(private userService: UsersService) { }

  ngOnInit() {
    // this.articleService.loadArticle(+this.activatedRoute.snapshot.params.id);
  }
  handleChangePassword(password: string, newPassword: string) {
    this.userService.changePassword(this.isUser.username, password, newPassword);
  }

}
