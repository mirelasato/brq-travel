import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopoComponent } from './topo/topo.component';
import { UserSignUpComponent } from './user-forms/user-sign-up/user-sign-up.component';
import { UserSignInComponent } from './user-forms/user-sign-in/user-sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopoComponent,
    UserSignInComponent,
    UserSignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
