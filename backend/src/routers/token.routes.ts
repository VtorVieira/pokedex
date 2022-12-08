import { Router } from 'express';
import validate from '../middlewares/validate';
import TokenController from '../controllers/token.controllers';

const router = Router();

const tokenController = new TokenController();

router.post('/', validate.validateToken, tokenController.validateUser);

export default router;
