import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {

  }

  handleCreateArticle(title: string, text: string, imageUrl: string) {
    this.articleService.createArticle(title, text, imageUrl);
    this.router.navigate(['']);
  }

}
