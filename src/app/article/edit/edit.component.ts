import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/article/articles.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  get article() { return this.articleService.article; }

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.articleService.loadArticle(this.activatedRoute.snapshot.params.id);
  }

  handleEditArticle(id: number, title: string, text: string, imageUrl: string) {
    this.articleService.editArticle(id, title, text, imageUrl);
    this.router.navigate(['']);
  }
}
