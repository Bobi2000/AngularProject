import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { ArticleRoutingModule } from './article-routing.module';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [DetailComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
  ]
})
export class ArticleModule { }
