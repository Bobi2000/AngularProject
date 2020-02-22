import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../boards.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/user/users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  get board() { console.log(this.boardsService.board); return this.boardsService.board; }

  get comments() { return this.boardsService.comments; }

  get isLogged() { return this.userService.isLogged; }

  get isUser() { return this.userService.currentUser.username; }

  constructor(
    private activatedRoute: ActivatedRoute,
    private boardsService: BoardsService,
    private userService: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.boardsService.loadBoard(+this.activatedRoute.snapshot.params.id);
    this.boardsService.loadComments(+this.activatedRoute.snapshot.params.id);
  }

  handleCreateComment(message: string, id: number) {
    this.boardsService.createComment(message, this.userService.currentUser.username, id);
    this.router.navigate(['boards/details/' + id]);
  }

  handleDeleteComment(id: number, articleId: number) {
    this.boardsService.deleteComment(id, articleId);
  }

  handleDeleteBoard(id: number) {
    this.boardsService.deleteBoard(id);
    this.router.navigate(['boards']);
  }

}
