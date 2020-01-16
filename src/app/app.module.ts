import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopoComponent } from './topo/topo.component';
import { UserRegisterComponent } from './user-forms/register/register.component';
import { UserLoginComponent } from './user-forms/login/login.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CardTravelComponent } from './card-travel/card-travel.component';
import { MyaccountComponent } from './user-forms/myaccount/myaccount.component';

import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxMaskModule } from 'ngx-mask';
import { TravelPackagesComponent } from './travel-packages/travel-packages.component';
import { ForgotPasswordComponent } from './user-forms/forgot-password/forgot-password.component';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from './shared/services/auth-service';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


import { UserLogin } from './shared/models/usuario';
import { ShoppingCartService } from './shopping-cart.service';
import { DescriptionComponent } from './visualizacao/description/description.component';
import { InformationComponent } from './visualizacao/information/information.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopoComponent,
    RodapeComponent,
    UserLoginComponent,
    UserRegisterComponent,
    RodapeComponent,
    RodapeComponent,
    CardTravelComponent,
    TravelPackagesComponent,
    ForgotPasswordComponent,
    VisualizacaoComponent,
    ShoppingCartComponent,
    MyaccountComponent,
    DescriptionComponent,
    InformationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgxMaskModule,
    CarouselModule.forRoot(),
    ButtonsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    TabsModule.forRoot()
  ],
  providers: [
    AuthService,
    ShoppingCartService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
