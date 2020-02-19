import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/interfaces/user';
import { UsersService } from '../user/users.service';
import { ArticleService } from './articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

get articles() { return this.articleService.articles; }

  constructor(private articleService: ArticleService)  {
  }

  ngOnInit() {
    this.articleService.loadArticles();
  }

}
