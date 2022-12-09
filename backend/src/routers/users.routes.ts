import { Router } from 'express';
import validate from '../middlewares/validate';
import UsersController from '../controllers/users.controllers';

const router = Router();

const usersController = new UsersController();

/*
  As rotas de users passam por uma validação do campos
  para que só consiga acessar se ao menos essa informações
  forem validas na regra de negócio.
*/

router.post(
  '/login',
  validate.validateLogin,
  validate.validateEmail,
  usersController.getUser,
);

router.post(
  '/register',
  validate.validateRegister,
  validate.validatePhone,
  validate.validateEmail,
  usersController.createUser,
);

export default router;
