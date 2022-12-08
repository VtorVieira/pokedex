import { Router } from 'express';
import PokemonController from '../controllers/pokemon.controllers';

const router = Router();

const pokemonController = new PokemonController();

router.post('/', pokemonController.findPokemon);

export default router;
