import * as Sequelize from 'sequelize';
import * as database from '../database/config/database';

import UserModel from '../database/models/users.model';

import Exception from '../errors/CustomErrors';

import IUser from '../interfaces/user.interface';
import IToken from '../interfaces/token.interace';
import GenerateToken from '../helpers/generateToken';

const sequelize = new Sequelize.Sequelize(database);

class UsersServices {
  getAllUser = async (): Promise<IUser> => {
    const user = await UserModel.findAll();
    return user as unknown as IUser;
  };

  checkIfExist = async (email: string): Promise<IUser> => {
    const user = await UserModel.findOne({ where: { email }, raw: true });
    return user as unknown as IUser;
  };

  loginUser = async (acess: IUser): Promise<IToken | string> => {
    const { email, password } = acess;
    const user = await UserModel.findOne({
      where: {
        [Sequelize.Op.and]: [
          { password },
          { email }
        ]
      },
      raw: true
    });

    if (!user) throw new Exception(401, 'Email ou senha incorreto');

    const token = GenerateToken.generateToken(user.name, email);

    return token;
  };

  createUser = async (acess: IUser): Promise<IUser> => {
    const { name, fone, email, password } = acess;
    const user = await this.checkIfExist(email);

    if (user) {
      throw new Exception(401, 'Usuário já cadastrado no sistema!');
    }

    const createdUser = await UserModel.create({ name, fone, email, password });

    return createdUser as unknown as IUser;
  };
}

export default UsersServices;
