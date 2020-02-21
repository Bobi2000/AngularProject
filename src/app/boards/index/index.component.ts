import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../boards.service';
import { UsersService } from 'src/app/user/users.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  get boards() { return this.boardsService.boards; }

  get isLogged() { return this.userService.isLogged; }

  constructor(private boardsService: BoardsService, private userService: UsersService) { }

  ngOnInit() {
    this.boardsService.loadBoards();
  }

}
