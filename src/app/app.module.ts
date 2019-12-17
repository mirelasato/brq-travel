import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopoComponent } from './topo/topo.component';
import { UserSignUpComponent } from './user-forms/user-sign-up/user-sign-up.component';
import { UserSignInComponent } from './user-forms/user-sign-in/user-sign-in.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CardTravelComponent } from './card-travel/card-travel.component';

import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxMaskModule } from 'ngx-mask';
import { TravelPackagesComponent } from './travel-packages/travel-packages.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopoComponent,
    RodapeComponent,
    UserSignInComponent,
    UserSignUpComponent,
    RodapeComponent,
    RodapeComponent,
    CardTravelComponent,
    TravelPackagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    CarouselModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
