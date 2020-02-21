import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticle } from '../shared/interfaces/article';
import { Router } from '@angular/router';
import { IComment } from '../shared/interfaces/comment';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  articles: IArticle[];
  article: IArticle;
  comments: IComment[];

  constructor(private http: HttpClient, private router: Router) { }

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

  loadComments(id: number) {
    this.http.get<IComment[]>(`https://localhost:44331/api/comments/${id}`).subscribe(comments => {
      this.comments = comments;
      console.log(comments);
    });
  }

  createArticle(title: string, text: string, imageUrl: string) {
    // this.http.post('https://localhost:44331/api/Articles', {title, text, imageUrl});
    this.http.get(`https://localhost:44331/api/articles/${title}/${text}`, { headers: { imageUrl } }).subscribe(article => {
      console.log(article);
    });
  }

  deleteArticle(id: number) {
    this.http.get(`https://localhost:44331/api/articles/${id}/delete/''`).subscribe(() => {
      this.loadArticles();
    });
  }

  createComment(comment: string, username: string, id: number) {
    this.http.get(`https://localhost:44331/api/comments/${id}/${comment}/${username}`).subscribe(() => {
      this.loadComments(id);
    });
  }

  deleteComment(id: number, articleId: number) {
    this.http.get(`https://localhost:44331/api/comments/${id}/delete`).subscribe(() => {
      this.loadComments(articleId);
    });
  }
}
