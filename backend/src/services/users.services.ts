import * as Sequelize from 'sequelize';
import * as database from '../database/config/database';

import UserModel from '../database/models/users.model';

import Exception from '../errors/CustomErrors';

import IUser from '../interfaces/user.interface';
import IToken from '../interfaces/token.interface';
import GenerateToken from '../helpers/generateToken';

const sequelize = new Sequelize.Sequelize(database);

class UsersServices {
  // verifica se existe o usuário no BD, utilizada na hora do cadastro
  checkIfExist = async (email: string): Promise<IUser> => {
    const user = await UserModel.findOne({ where: { email }, raw: true });
    return user as unknown as IUser;
  };

  // Ao logar, valida o e-mail e senha do usuário, se sucesso, gera um token
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

    // caso sucesso, gera o token com o nome e email do usuário
    const token = GenerateToken.generateToken(user.name, email);

    return token;
  };

  // antes de criar o usuário, valida se o e-mail se encontra cadastrado
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
