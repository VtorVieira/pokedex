import { verify } from 'jsonwebtoken';

const JWT_SECRET = 'jwt_secret';

const verifyToken = (token: string) => {
  try {
    const decode = verify(token, JWT_SECRET);

    return decode;
  } catch (err) {
    return err;
  }
};

export default verifyToken;