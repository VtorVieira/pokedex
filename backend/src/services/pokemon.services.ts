import * as Sequelize from 'sequelize';
import * as database from '../database/config/database';

import PokemonModel from '../database/models/pokemons.model';

const sequelize = new Sequelize.Sequelize(database);

class PokemonsServices {
  findPokemon = async (offset: number): Promise<any> => {
    const user = await PokemonModel.findAll(
      { offset, limit: 20 }
    );
    return user as unknown as any;
  };
}

export default PokemonsServices;
