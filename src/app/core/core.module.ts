import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleComponent } from '../article/article.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavigationComponent, ArticleComponent, FooterComponent],
  imports: [
    CommonModule,
    NgbNavModule,
    RouterModule
  ],
  exports: [NavigationComponent, ArticleComponent]
})
export class CoreModule { }
