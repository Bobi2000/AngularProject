import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../boards.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/user/users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  get board() { return this.boardsService.board; }

  get comments() { return this.boardsService.comments; }

  get isLogged() { return this.userService.isLogged; }

  constructor(private activatedRoute: ActivatedRoute, private boardsService: BoardsService, private userService: UsersService) { }

  ngOnInit() {
    this.boardsService.loadBoard(+this.activatedRoute.snapshot.params.id);
    this.boardsService.loadComments(+this.activatedRoute.snapshot.params.id);
  }

  handleCreateComment(message: string, id: number) {
    this.boardsService.createComment(message, this.userService.currentUser.username, id);
  }

}
