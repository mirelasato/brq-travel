import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { UserLoginComponent} from './user-forms/login/login.component';
import { UserRegisterComponent } from './user-forms/register/register.component';
import { TravelPackagesComponent } from './travel-packages/travel-packages.component';
import { ForgotPasswordComponent } from './user-forms/forgot-password/forgot-password.component';
import { CardTravelComponent } from './card-travel/card-travel.component';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';
import { MyaccountComponent } from './user-forms/myaccount/myaccount.component';
import { RegistertravelComponent } from './user-forms/registertravel/registertravel.component';

// Impede visualização de páginas quando está deslogado
import { AuthGuard } from '../../src/app/shared/services/auth.guard';
// impede visualização de paginas quando já está logado (por exemplo pag de login)
import { SecureInnerPagesGuard } from '../../src/app/shared/services/secure-inner-pages.guard';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home',  component: HomeComponent},
  { path: 'entrar', component: UserLoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'cadastrar', component: UserRegisterComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'pacotes', component: TravelPackagesComponent },
  { path: 'recuperar-senha', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'pacotes', component: CardTravelComponent },
  { path: 'visualizacao/:id', component: VisualizacaoComponent},
  { path: 'carrinho-de-compras', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: 'minha-conta', component: MyaccountComponent, canActivate: [AuthGuard] },
  { path: 'cadastro-de-viagem', component: RegistertravelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
