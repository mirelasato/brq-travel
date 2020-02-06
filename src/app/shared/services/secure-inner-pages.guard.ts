import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth-service';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class SecureInnerPagesGuard implements CanActivate {
  CurrentUser: User;
  emailUser = this.authService.GetEmail;
  constructor(
    public authService: AuthService,
    public API: ApiService,
    public router: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn && !this.isAdmin()) {
      this.router.navigate(['home']);
    }
    return true;
  }

  isAdmin(): boolean {
    const data: User = JSON.parse(localStorage.getItem('userLogged'));
    console.log(data);
    return data[0].admin;
  }


}
