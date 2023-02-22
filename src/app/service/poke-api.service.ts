// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Observable
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(private httpClient: HttpClient) { }

  get apiListAllPokemons(): Observable<any> {
    return this.httpClient.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe({ next: (res) => resPokemons.status = res });
        })
      })
    );
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.httpClient.get<any>(url).pipe(map(res => res));
  }
}
