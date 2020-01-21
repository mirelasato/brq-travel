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
  userExists;

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getUser(emailUser: string) {
    if (emailUser === '') { emailUser = this.authService.GetEmail; }
    return this.http.get<User>(this.apiURL + '/usuarios?email=' + emailUser);
  }

  createUser(newUser) {
    return this.http.post<User>(this.apiURL + '/usuarios', newUser, this.httpOptions).pipe(take(1));
  }

  updateUser(userId, newInfo) {
    return this.http.put<User>(this.apiURL + '/usuarios/' + userId, newInfo, this.httpOptions).pipe(take(1));
  }

}
