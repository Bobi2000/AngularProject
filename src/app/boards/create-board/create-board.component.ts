import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/user/users.service';
import { BoardsService } from '../boards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {

  constructor(private userService: UsersService, private boardSerivce: BoardsService, private router: Router) { }

  ngOnInit() {
  }

  handleCreateBoard(titleInput: string, textInput: string) {
    this.boardSerivce.createBoard(this.userService.currentUser.username, titleInput, textInput);
    
  }
}
