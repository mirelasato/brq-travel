import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopoComponent } from './topo/topo.component';
import { UserSignUpComponent } from './user-forms/user-sign-up/user-sign-up.component';
import { UserSignInComponent } from './user-forms/user-sign-in/user-sign-in.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CardTravelComponent } from './card-travel/card-travel.component';
import { CardchoicetravelComponent } from './cardchoicetravel/cardchoicetravel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopoComponent,
    UserSignInComponent,
    UserSignUpComponent,
    RodapeComponent,
    RodapeComponent,
    CardTravelComponent,
    CardchoicetravelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
