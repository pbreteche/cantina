import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RestoDetailComponent } from './resto-detail/resto-detail.component';
import { RestoFormComponent } from './resto-form/resto-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveRestoFormComponent } from './reactive-resto-form/reactive-resto-form.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PageTitleComponent,
    MainMenuComponent,
    RestoDetailComponent,
    RestoFormComponent,
    ReactiveRestoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
