import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
