import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/article/articles.service';
import { UsersService } from 'src/app/user/users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  get article() { return this.articleService.article; }

  get isLogged() { return this.userService.isLogged; }

  get comments() { return this.articleService.comments; }

  get isUser() { return this.userService.currentUser.username; }

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService, private userService: UsersService) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.data.shouldFetchArticle) {
      this.articleService.loadArticle(+this.activatedRoute.snapshot.params.id);
    }
    this.articleService.loadComments(+this.activatedRoute.snapshot.params.id);
  }

  handlePostCommnent(comment: string, id: number) {
    this.articleService.createComment(comment, this.isUser, id);
  }

  handleDeleteComment(id: number, articleId: number) {
    this.articleService.deleteComment(id, articleId);
  }
}
