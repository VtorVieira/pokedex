import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokedex-production-f777.up.railway.app',
});

export const verifyToken = async (token) => {
  try {
    const retorno = await api.post('/token', {}, {
      headers: {
        authorization: token,
      },
    });
    return retorno.data.email;
  } catch (error) {
    return false;
  }
};

export const postLogin = async (email, password) => {
  const { data } = await api.post('/login', { email, password });
  return data;
};

export const postRegister = async (name, fone, email, password) => {
  const { data } = await api.post('/register', { name, fone, email, password });
  return data;
};

export const getAllPokemonBD = async (offset) => {
  const { data } = await api.post('/pokemon', {offset});

  const newData = data.map((e) => {
      return {
        id: e.id,
        name: e.name[0].toUpperCase() + e.name.substring(1),
        img: e.img,
        height: e.height,
        weight: e.weight,
        types: Object.values(e.types.replace("{","").replace("}","").split(',')),
        abilities: Object.values(e.abilities.replace("{","").replace("}","").split(',')),
      }
    }
  )

  return newData;
};

// export const getAllPokemon = async () => {
//   const API = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'
//   const API_DETAIL = 'https://pokeapi.co/api/v2/pokemon/'
//   try {
//     const data = await fetch(API).then((response) => response.json());
//     const detail = await Promise.all(data.results.map(async (pokemon) => {
//       const newResults = await fetch(`${API_DETAIL}${pokemon.name}`).then((response) => response.json());
//         return {
//           id: newResults.id,
//           name: newResults.name,
//           img: newResults.sprites.other.home.front_default,
//           height: newResults.height,
//           weight: newResults.weight,
//           types: newResults.types.map((t) => t.type.name),
//           abilities: newResults.abilities.map((a) => a.ability.name),
//         }
//     }))
//     console.log(detail);
//     return detail;
//   } catch (err) {
//     return err;
//   }
// }
