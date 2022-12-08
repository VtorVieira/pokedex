import { Router } from 'express';
import validate from '../middlewares/validate';
import UsersController from '../controllers/users.controllers';

const router = Router();

const usersController = new UsersController();

router.get('/all', usersController.getAllUser);

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
