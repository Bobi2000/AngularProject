import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/article/articles.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  get article() { return this.articleService.article; }

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.data.shouldFetchArticle) {
      this.articleService.loadArticle(+this.activatedRoute.snapshot.params.id);
    }
  }
}
