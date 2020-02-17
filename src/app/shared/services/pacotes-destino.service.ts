import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Destino } from '../models/destino';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacotesDestinoService {

  private readonly API = 'http://localhost:3000/destinos';

  constructor(private http: HttpClient) { }

  lista() {
    return this.http.get<Destino[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
}
