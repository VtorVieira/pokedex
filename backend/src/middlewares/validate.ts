import { Request, Response, NextFunction } from 'express';

import { verify } from 'jsonwebtoken';

import CustomErrors from '../errors/CustomErrors';

const JWT_SECRET = 'jwt_secret';

const validate = {
  validateToken: (req: Request, _res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new CustomErrors(401, 'Token not found');
    }
    try {
      verify(authorization, JWT_SECRET);
      next();
    } catch (err) {
      throw new CustomErrors(401, 'Token must be a valid token');
    }
  },

  validateLogin: (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new CustomErrors(400, 'Todos os campos devem ser preenchidos');
    }

    if (password.length < 6) {
      throw new CustomErrors(400, 'A senha deve conter pelo menos 6 caracteres');
    }
    next();
  },

  validateEmail: (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!regex.test(email)) {
      throw new CustomErrors(400, 'Por favor insira um endereço de email válido! Ex: email@email.com');
    }
    next();
  },

  validatePhone: (req: Request, res: Response, next: NextFunction) => {
    const { fone } = req.body;
    const regex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
    if (!regex.test(fone)) {
      throw new CustomErrors(400, 'Por favor, digite seu número de telefone no formato xx xxxx-xxxx');
    }
    next();
  },

  validateRegister: (req: Request, res: Response, next: NextFunction) => {
    const { name, fone, email, password } = req.body;
    if (!name || !email || !password || !fone) {
      throw new CustomErrors(400, 'Todos os campos devem ser preenchidos');
    }
    if (name < 2) {
      throw new CustomErrors(401, 'Nome deve ter pelo menos 2 caracteres');
    }
    if (password.length < 6) {
      throw new CustomErrors(400, 'A senha deve conter pelo menos 6 caracteres');
    }
    next();
  },
};

export default validate;
