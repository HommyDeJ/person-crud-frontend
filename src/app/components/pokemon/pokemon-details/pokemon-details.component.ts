import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../../models/pokemon';
import { PokemonId } from '../../../models/pokemon-id';
import { PokemonService } from '../../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  public pokemons: Pokemon[];
  public pokemon: PokemonId;
  public sub: any;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.getPokemonId();
  }

  getPokemonId() {
    this.sub = this.route.params.subscribe(params => {
      this.pokemonService
        .getPokemonId(params.id)
        .subscribe((data: PokemonId) => {
          this.pokemon = data;
        console.log(this.pokemon);
        });
    });
  }

}