import { IUser } from "./IUser";

export interface IProps {
  formType: string,
  handleChange: Function,
  handleSignIn: Function,
  handleSingUp: Function,
  changeForm: Function,
  form: IUser,
  requestFailed: {
    message: string;
  },
}
