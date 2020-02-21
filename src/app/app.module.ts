import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-rounting-module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './boards/index/index.component';
import { DetailsComponent } from './boards/details/details.component';
import { CreateBoardComponent } from './boards/create-board/create-board.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    DetailsComponent,
    CreateBoardComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    ArticleModule,
    UserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
