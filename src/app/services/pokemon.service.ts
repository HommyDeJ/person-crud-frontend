import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonId } from '../models/pokemon-id';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public Url: any;

  constructor(private http: HttpClient) { 
    this.Url = environment.pokeApiUrl;
  }

  getPokemon(id: number, limit: number): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.Url}?offset=${id}&limit=${limit}`);
  }

  getPokemonId(id): Observable<PokemonId> {
    return this.http.get<PokemonId>(`${this.Url}/${id}`);
  }
}
