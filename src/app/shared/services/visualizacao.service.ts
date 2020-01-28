import { HttpClient } from '@angular/common/http'; //importar desse jeito, lembrar de quando for se referir a esse importe ser httpclient
import { Injectable} from '@angular/core';

import{ URL_API} from './app.api';
import { Detalhes } from '../models/detalhes';
import { tap } from 'rxjs/operators';



@Injectable()
export class VisualizacaoService{
    private url_api = 'http://localhost:3000/destinos' //ponto unico para modificação
    
    constructor(private http: HttpClient){}
    
    
public getOfertas(): Promise<Detalhes[]> 
{
    //efetuar uma requisição http
    return this.http.get(`${URL_API}?destaque=true`)//observable
    .toPromise()  //para converter esse observable para uma promise 
    .then((resposta: any) => resposta)
    //retornar uma promise Oferta[]
    }
    public getDetalhesPorCategoria(feriado: string) : Promise<Detalhes[]> {
        return this.http.get(`${URL_API}?feriado=${feriado}`)
            .toPromise()
            .then((resposta: any)=>  resposta)//objeto literal
    }
    public getDetalhesPorId(id: number): Promise<Detalhes>{//vai retornar uma promise
    return this.http.get(`${URL_API}?id=${id}`)// filtra através dos atributos de cada objeto
    .toPromise()//converte uma observable para uma promise
    .then((resposta: any)=> { // quando estiver resolvido recebe uma resposta com base na ação
        //o metodo .ishift ele extrai a primeira posição de um array 
        return resposta[0]
    })
    } 
    
    
    
    getDestino(id: string) {
        return this.http.get<Detalhes>(this.url_api + '/' + id);
      }

}

