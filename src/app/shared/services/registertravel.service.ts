import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegistertravelService {

  apiURL = 'http://localhost:3000/destinos';

  constructor(private http: HttpClient) { }

  create(pacote) {
    pacote.tipo = pacote.tipo === '1' ? 1 : 2;
    return this.http.post(this.apiURL, pacote).pipe(take(1));
  }
}
