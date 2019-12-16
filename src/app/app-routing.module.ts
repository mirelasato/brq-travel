import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { UserSignInComponent} from './user-forms/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-forms/user-sign-up/user-sign-up.component';
import { CardTravelComponent } from './card-travel/card-travel.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home',  component: HomeComponent},
  { path: 'entrar', component: UserSignInComponent},
  { path: 'cadastrar', component: UserSignUpComponent},
  { path: 'pacotes', component: CardTravelComponent},
  { path: 'visualizacao', component: HomeComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
