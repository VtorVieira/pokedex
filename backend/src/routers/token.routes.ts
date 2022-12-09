import { Router } from 'express';
import validate from '../middlewares/validate';
import TokenController from '../controllers/token.controllers';

const router = Router();

const tokenController = new TokenController();

/*
  Rota token responsável por receber o token do front,
  e assim avaliar se eh ou não um token valido. 
*/
router.post('/', validate.validateToken, tokenController.validateUser);

export default router;
