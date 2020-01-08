import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth-service';
import { User } from '../models/usuario';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiURL = 'http://localhost:3000';
  emailUser = this.authService.GetEmail;

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  api_url = 'http://localhost:3000/usuarios';
  user: any[];


  getUser() {
    return this.http.get<User>(this.apiURL + '/usuarios?email=' + this.emailUser);
  }

  createUser(newUser) {
    return this.http.post<User>(this.apiURL + '/usuarios', newUser, this.httpOptions).pipe(take(1));
  }

  updateUser(userId, newInfo) {
    return this.http.put<User>(this.apiURL + '/usuarios/' + userId, newInfo, this.httpOptions).pipe(take(1));
  }

}
