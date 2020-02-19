import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticle } from '../shared/interfaces/article';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  articles: IArticle[];
  article: IArticle;

  constructor(private http: HttpClient) { }

  loadArticles() {
    this.http.get<IArticle[]>('https://localhost:44331/api/articles').subscribe(articles => {
      this.articles = articles;
    });
  }

  loadArticle(id: number) {
    this.http.get<IArticle>(`https://localhost:44331/api/articles/${id}`).subscribe(article => {
      this.article = article;
      console.log(article);
    });
  }
}
