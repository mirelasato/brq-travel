import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { UserSignInComponent} from './user-forms/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-forms/user-sign-up/user-sign-up.component';
import { TravelPackagesComponent } from './travel-packages/travel-packages.component';
import { ForgotPasswordComponent } from './user-forms/forgot-password/forgot-password.component';
import { CardTravelComponent } from './card-travel/card-travel.component';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';
import { MinhacontaComponent } from './minhaconta/minhaconta.component';

// Impede visualização de páginas quando está deslogado
import { AuthGuard } from '../../src/app/shared/services/auth.guard';
// impede visualização de paginas quando já está logado (por exemplo pag de login)
import { SecureInnerPagesGuard } from '../../src/app/shared/services/secure-inner-pages.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home',  component: HomeComponent},
  { path: 'entrar', component: UserSignInComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'cadastrar', component: UserSignUpComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'pacotes', component: TravelPackagesComponent },
  { path: 'recuperar-senha', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'pacotes', component: CardTravelComponent },
  { path: 'visualizacao', component: VisualizacaoComponent },
  { path: 'minha-conta', component: MinhacontaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
