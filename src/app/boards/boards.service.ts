import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IBoard } from '../shared/interfaces/board';
import { IComment } from '../shared/interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  boards: IBoard[];

  board: IBoard;

  comments: IComment[];

  constructor(private http: HttpClient, private router: Router) { }

  loadBoards() {
    this.http.get<IBoard[]>('https://localhost:44331/api/boards').subscribe(boards => {
      console.log(boards);
      this.boards = boards;
    });
  }

  loadBoard(id: number) {
    this.http.get<IBoard>(`https://localhost:44331/api/boards/${id}`).subscribe(board => {
      console.log(board);
      this.board = board;
    });
  }

  createBoard(name: string, title: string, text: string) {
    // this.http.post('https://localhost:44331/api/Articles', {title, text, imageUrl});
    this.http.get(`https://localhost:44331/api/boards/${name}/${title}/${text}`).subscribe((board: any) => {
      this.router.navigate(['boards/details/' + board.id]);
    });
  }

  loadComments(id: number) {
    this.http.get<IComment[]>(`https://localhost:44331/api/comments/${id}/board`).subscribe(comments => {
      this.comments = comments;
      console.log(comments);
    });
  }

  createComment(comment: string, username: string, id: number) {
    this.http.get(`https://localhost:44331/api/comments/${id}/${comment}/${username}/board`).subscribe(() => {
      this.loadComments(id);
    });
  }
}
