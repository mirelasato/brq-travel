import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Destino } from './shared/models/destino';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private readonly API = 'http://localhost:3000/destinos';


  constructor(private http: HttpClient) { }

  addToCart() {
    return this.http.get<Destino[]>(this.API)
    .pipe(
      tap(console.log)
    )
  }
}
