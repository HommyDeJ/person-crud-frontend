import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../models/pokemon';
import { PokemonId } from '../../../models/pokemon-id';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  public sub: any;
  public pokemons: any;
  public query: string;
  public pokemon: any = [];
  public offset: number = 0;
  public limit: number = 20;

  constructor(private readonly pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAll();
  }

  onSubmit() {
    this.offset += 20;
    this.getAll();
  }

  getAll() {
    this.pokemonService.getPokemon(this.offset, this.limit).subscribe((data: Pokemon[]) => {
      this.pokemons = data;
      Object.keys(this.pokemons.results).map(key => {
        this.showPokemon(this.pokemons.results[key].name);
      });
    });
  }

  showPokemon(id: any) {
    this.pokemonService.getPokemonId(id).subscribe((data: PokemonId) => {
      const newPokemon = {
        id: data.id,
        name: data.name,
        imageFront: data.sprites['front_default'],
        imageBack: data.sprites['back_default'],
        species: data['species'].url,
      };

      this.pokemon.push(newPokemon);
      this.pokemon.sort((array, order) => array.id - order.id);
    });
  }
}