import { Request, Response } from 'express';
import IToken from '../interfaces/token.interace';
import UserService from '../services/users.services';

class UsersController {
  constructor(private _userService = new UserService()) { }

  public getAllUser = async (req: Request, res: Response) => {
    const all = await this._userService.getAllUser();

    res.status(200).json(all);
  };

  public getUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const token = await this._userService.loginUser({
      email, password,
      name: '',
      fone: ''
    });

    res.status(200).json({ token });
  };

  public createUser = async (req: Request, res: Response) => {
    const { name, fone, email, password } = req.body;
    const createdUser = await this._userService.createUser({ name, fone, email, password });

    res.status(200).json({ createdUser });
  };
}

export default UsersController;
