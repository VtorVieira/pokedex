import { IPokemons } from '../interfaces/IPokemons';

function Pokemons({pokemon}: string[] | any) {
  return(
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {pokemon.length > 0 
        && pokemon.map((pokemons: IPokemons) => (
          <div
            key={pokemons.id}
            className='card mt-2 ml-2 mr-2 bg-gradient-to-r from-indigo-400 to-blue-400 shadow-xl'>
            <figure>
              <img className='w-36 h-36' src={pokemons.img} alt={pokemons.name} />
            </figure>
            <div className='card-body'>
              <div className='card-title justify-between'>
                <div>
                  Nome:
                  <p className='text-white'>{pokemons.name}</p>
                </div>
                <div>
                  Altura:
                  <p className='text-white'>{pokemons.height}m</p>
                </div>
                <div>
                  Peso:
                  <p className='text-white'>{pokemons.weight}kg</p>
                </div>
              </div>
              <div className='card-actions text-lg font-bold items-center'>
                Tipo:
                <div className='card-actions'>
                  { pokemons.types.map((type, index: number) => (
                    <p className='badge badge-outline text-white font-bold text-base' key={index}>{ type[0].toUpperCase() + type.substring(1) }</p>
                  )) }
                </div>
              </div>
              <div className='card-actions text-lg font-bold items-center'>
                Habilidades: 
                <div className='card-actions'>
                { pokemons.abilities.map((ability, index: number) => (
                    <p className='badge badge-outline text-white font-bold text-base' key={index}>{ ability[0].toUpperCase() + ability.substring(1) }</p>
                  )) }
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Pokemons;