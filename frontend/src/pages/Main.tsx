import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllPokemonBD, verifyToken } from '../services/requests';
import Header from '../components/Header';
import Pokemons from '../components/Pokemons';

import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { Footer } from '../components/Footer';

function Main() {
  const [pokemon, setPokemon] = useState<string[]>([]);
  const [next, setNext] = useState<number>(20);
  const [previous, setPrevious] = useState<number>(0);
  const navigate = useNavigate();

  /* useEffect para carregamento da primeira lista de pokemons */
  useEffect(() => {
    async function getPokemons() {
      const localToken = JSON.parse(localStorage.getItem('token') as string) || [];
      const logged = await verifyToken(localToken.token);
      if (!logged) {
        navigate('/');
      }
      setPokemon(await getAllPokemonBD(0));
    }
    getPokemons();
  },[navigate]);

  const nextPage = async () => {
    if(next === 140) {
      setNext((prevState) => prevState + 11);
      setPokemon(await getAllPokemonBD(next));
    } else if (next === 151) {
      return;
    } else {
      setNext((prevState) => prevState + 20);
      setPokemon(await getAllPokemonBD(next));
      setPrevious(next);
    }
  }

  const previousPage = async () => {
    if(previous <= 0) {
      return
    } else if (previous === 20) {
      setPrevious(0);
      setPokemon(await getAllPokemonBD(0));
      setNext(20)
    } else {
      setPrevious((prevState) => prevState - 20);
      setPokemon(await getAllPokemonBD(previous));
      setNext(previous);
    }
  }
    
  return(
    <div className='bg-cover bg-center bg-[url("../images/background.svg")]'>
      <Header />
      <Pokemons 
        pokemon={pokemon}
      />
      <div className='flex justify-center text-5xl p-2 gap-4'>
        { previous > 0
          && <div className='flex justify-center items-center'>
            <p className='text-white font-bold text-lg' onClick={previousPage}>Página <br/>Anterior</p>
            <button type='button' onClick={previousPage}>
              <GrCaretPrevious color='brand' />
            </button>
          </div>
        }
        { next < 150 
          && <div className='flex justify-center items-center'>
            <button type='button' onClick={nextPage}>
              <GrCaretNext color='brand' /> 
            </button>
            <p className='text-white font-bold text-lg' onClick={nextPage}>Proxima <br />Página</p>
          </div>
        }
      </div>
      <Footer />
    </div>
  );
}

export default Main;
