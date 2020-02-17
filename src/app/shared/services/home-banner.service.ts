import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Banner } from '../models/banner';

@Injectable({
  providedIn: 'root'
})
export class HomeBannerService {

  private readonly API = 'http://localhost:3000/feriado';

  constructor(private http: HttpClient) { }

  listaBanner() {
    return this.http.get<Banner[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
}
