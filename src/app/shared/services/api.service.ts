import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  api_url = 'http://localhost:3000/usuarios';
  user: any[];

  constructor(private httpClient: HttpClient) { }

  public getUser() {
    return this.httpClient.get(this.api_url);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
