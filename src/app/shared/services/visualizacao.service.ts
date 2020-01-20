
import { Injectable } from '@angular/core';
import { Destino } from '../models/destino';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable()
export class VisuaizacaoService{
    
    private readonly API = 'http://localhost:3000/destinos';

  constructor(private http: HttpClient) { }

  getDestinos() {
 return this.http.get<Destino[]>(this.API)
    .pipe(
      tap(console.log)
  );
 }

    // public getDestinos(): Promise<Destino[]> {
    //     return this.http.get('http://localhost:3000/destinos')
    //     .toPromise()
    //     .then((resposta: any) => resposta.json() )
    // }
}
