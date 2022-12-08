import React from 'react';
import { IPokemons } from '../interfaces/IPokemons';

function Pokemons({pokemon}: string[] | any) {
  return(
    <div className='grid mt-3 ml-2 mr-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:ml-16 xl:mr-16 xl:mt-3'>
      {pokemon.length > 0 
        && pokemon.map((pokemons: IPokemons) => (
          <div
            key={pokemons.id}
            className='flex bg-gradient-to-r from-indigo-600 to-blue-300 border-solid border-2 border-[#6b6b6b] rounded-xl xl:flex-row'>
            <div className='ml-2 w-52 h-80 sm:ml-1 md:ml-1 md:w-36 xl:ml-2 xl:w-60 xl:h-80'>
              <div className='font-bold'>
                <div>
                  Nome:
                  <p className='ml-5 font-bold text-white'>{pokemons.name}</p>
                </div>
                <div className='mt-1 sm:mt-0 md:mt-0'>
                  Altura:
                  <p className='ml-5 font-bold text-white'>{pokemons.height}m</p>
                </div>
                <div className='mt-1 sm:mt-0 md:mt-0'>
                  Peso:
                  <p className='ml-5 font-bold text-white'>{pokemons.weight}kg</p>
                </div>
              </div>
              <div className='mt-1 sm:mt-0 font-bold md:mt-0'>
                Tipo:
                <div className='flex gap-3 md:gap-1'>
                  { pokemons.types.map((type, index: number) => (
                    <p key={index} className='mt-2 border-solid border-2 border-white rounded-xl p-2 font-bold text-white'>{ type[0].toUpperCase() + type.substring(1) }</p>
                  )) }
                </div>
              </div>
              <div className='mt-1 font-bold md:w-72'>
                Habilidates: 
                <div className='flex gap-2 w-96 sm:gap-1 sm:w-[340px] md:w-80 xl:w-96'>
                { pokemons.abilities.map((ability, index: number) => (
                    <p key={index} className='mt-2 border-solid border-2 border-white rounded-xl p-2 font-bold text-white sm:p-1 md:p-1'>{ ability[0].toUpperCase() + ability.substring(1) }</p>
                  )) }
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <img className='w-36 h-36 xl:w-48 xl:h-48' src={pokemons.img} alt={pokemons.name} />
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Pokemons;