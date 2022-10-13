import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdddataComponent } from './adddata/adddata.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewdataComponent } from './viewdata/viewdata.component';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
