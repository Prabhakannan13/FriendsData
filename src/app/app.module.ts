import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdddataComponent } from './adddata/adddata.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {
    path:"",component:AdddataComponent
  },
  {
    path:"viewdata",component:ViewdataComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdddataComponent,
    ViewdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
