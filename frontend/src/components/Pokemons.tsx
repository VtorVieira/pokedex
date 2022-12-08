import React from 'react';
import { IPokemons } from '../interfaces/IPokemons';

function Pokemons({pokemon}: string[] | any) {
  return(
    <div className='grid mt-3 ml-2 mr-2 gap-4 md:grid md:grid-cols-3 md:ml-16 md:mr-16 md:mt-3'>
      {pokemon.length > 0 
        && pokemon.map((pokemons: IPokemons) => (
          <div
            key={pokemons.id}
            className='flex bg-gradient-to-r from-indigo-600 to-blue-300 border-solid border-2 border-[#6b6b6b] rounded-xl md:flex-row'>
            <div className='ml-2 w-52 h-80 md:ml-8 md:w-72 md:h-80'>
              <div className='font-bold'>
                <div>
                  Nome:
                  <p className='ml-5 font-bold text-white'>{pokemons.name}</p>
                </div>
                <div className='mt-1'>
                  Altura:
                  <p className='ml-5 font-bold text-white'>{pokemons.height}m</p>
                </div>
                <div className='mt-1'>
                  Peso:
                  <p className='ml-5 font-bold text-white'>{pokemons.weight}kg</p>
                </div>
              </div>
              <div className='mt-1 font-bold'>
                Tipo:
                <div className='flex gap-3'>
                  { pokemons.types.map((type, index: number) => (
                    <p key={index} className='mt-2 border-solid border-2 border-white rounded-xl p-2 font-bold text-white'>{ type[0].toUpperCase() + type.substring(1) }</p>
                  )) }
                </div>
              </div>
              <div className='mt-1 font-bold'>
                Habilidates: 
                <div className='flex gap-3 w-96'>
                { pokemons.abilities.map((ability, index: number) => (
                    <p key={index} className='mt-2 border-solid border-2 border-white rounded-xl p-2 font-bold text-white'>{ ability[0].toUpperCase() + ability.substring(1) }</p>
                  )) }
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <img className='w-36 h-36 md:w-56 md:h-56' src={pokemons.img} alt={pokemons.name} />
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Pokemons;