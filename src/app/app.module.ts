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
import { ObservableComponent } from './observable/observable.component';
import {RestaurantStoreService} from './restaurant-store.service';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageTitleComponent,
    MainMenuComponent,
    RestoDetailComponent,
    RestoFormComponent,
    ReactiveRestoFormComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: MainMenuComponent },
      { path: 'resto/:id', component: RestoDetailComponent }
    ])
  ],
  providers: [
    RestaurantStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
