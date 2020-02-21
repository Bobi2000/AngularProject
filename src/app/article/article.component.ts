import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/interfaces/user';
import { UsersService } from '../user/users.service';
import { ArticleService } from './articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

get isAdmin() { return this.userService.isAdmin; }

get articles() 
{ 
  return this.articleService.articles; 
}

  constructor(private articleService: ArticleService, private userService: UsersService)  {
  }

  ngOnInit() {
    this.articleService.loadArticles();
  }

  delelteArticle(id: number) {
    console.log('deleting ' + id);
    this.articleService.deleteArticle(id);
  }

}
