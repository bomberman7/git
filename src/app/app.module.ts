import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule} from "@angular/router";
import { ItemComponent } from "./item/item.component";

const routes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'note/:id', component: ItemComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ItemComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
