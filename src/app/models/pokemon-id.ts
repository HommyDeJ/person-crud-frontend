export class PokemonId {
    name: string;
    id: number;
    sprites: Sprites;
    stats: string;
    types: string;
    abilities: string;
    height: string;
    weight: string;
    moves: string;
}

export class Sprites {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
}