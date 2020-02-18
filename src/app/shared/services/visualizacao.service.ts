import { Destino } from './../models/destino';
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

import { URL_API} from './app.api';
import { Detalhes } from '../models/detalhes';
import { tap, catchError, delay} from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable()
export class VisualizacaoService {

    constructor(private http: HttpClient){}
    // tslint:disable-next-line: variable-name
    private url_api = 'http://localhost:3000/destinos'; // ponto unico para modificação

      getProduto(id: number): Observable<Detalhes> {
        const url = `${this.url_api}/${id}`;
        return this.http.get<Detalhes>(url).pipe(
           delay(400), // TODO: Remover para produção
          tap(_ => console.log(`leu o produto id=${id}`)),
        );
      }
}

