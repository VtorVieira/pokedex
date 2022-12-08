import { Request, Response } from 'express';
import verifyToken from '../utils/verifyToken';

class TokenController {
  constructor() { }

  public validateUser = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const user = verifyToken(authorization as string);
    res.status(200).json(user);
  };
}

export default TokenController;
