import { Model, INTEGER, STRING, ABSTRACT } from 'sequelize';
import db from '.';

class Pokemons extends Model {
  id!: number;
  name!: string;
  img!: string;
  height!: number;
  weight!: number;
  types!: string;
  abilities!: string;
  statsName!: string;
  statsValue!: string;
}

Pokemons.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING(255),
    allowNull: false,
  },
  img: {
    type: STRING(255),
    allowNull: false,
  },
  height: {
    type: INTEGER,
    allowNull: false,
  },
  weight: {
    type: INTEGER,
    allowNull: false,
  },
  types: {
    type: ABSTRACT,
    allowNull: false,
  },
  abilities: {
    type: ABSTRACT,
    allowNull: false,
  },
  statsName: {
    type: ABSTRACT,
    allowNull: false,
  },
  statsValue: {
    type: ABSTRACT,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'pokemons',
  timestamps: false,
});


export default Pokemons;
