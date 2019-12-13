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
import { NgxMaskModule } from 'ngx-mask';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopoComponent,
    RodapeComponent,
    UserSignInComponent,
    UserSignUpComponent,

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
