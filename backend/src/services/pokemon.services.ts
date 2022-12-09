import * as Sequelize from 'sequelize';
import { IPokemons } from '../interfaces/pokemon.interface';
import * as database from '../database/config/database';

import PokemonModel from '../database/models/pokemons.model';

const sequelize = new Sequelize.Sequelize(database);

class PokemonsServices {
  /* 
    *Criado um seeders com 150 pokemons e não a lista oficial que tem mais de 1000
    
    Realiza a consulta da lista de pokemons, recenbendo como parametro
    a quantidade, limitando em apresentar 20 pokemons por vez.
    
  */
  findPokemon = async (offset: number): Promise<IPokemons[]> => {
    const user = await PokemonModel.findAll(
      { offset, limit: 20 }
    );
    return user as IPokemons[];
  };
}

export default PokemonsServices;
