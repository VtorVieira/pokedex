import { Request, Response } from 'express';
import PokemonService from '../services/pokemon.services';

class PokemonsController {
  constructor(private _pokemonService = new PokemonService()) { }

  public findPokemon = async (req: Request, res: Response) => {
    const { offset } = req.body;
    const pokemons = await this._pokemonService.findPokemon(offset);

    res.status(200).json(pokemons);
  };
}

export default PokemonsController;
