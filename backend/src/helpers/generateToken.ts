import { sign } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'jwt_secret';

const jwtCheckUser = {
  generateToken: (email: string, name: string) => {
    console.log('back', email, name);
    const token = sign({ name, email }, secret, {
      expiresIn: '1d',
      algorithm: 'HS256',
    });
    return token;
  },

};
export default jwtCheckUser;

