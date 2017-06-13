import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RestoDetailComponent } from './resto-detail/resto-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PageTitleComponent,
    MainMenuComponent,
    RestoDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
