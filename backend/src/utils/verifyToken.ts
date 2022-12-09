import { verify } from 'jsonwebtoken';

const JWT_SECRET = 'jwt_secret';

/*
  Responsável por verificar a integridade do token,
  caso falho, retorna erro e o fronto manipula essa informação.
*/
const verifyToken = (token: string) => {
  try {
    const decode = verify(token, JWT_SECRET);

    return decode;
  } catch (err) {
    return err;
  }
};

export default verifyToken;