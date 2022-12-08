import { IUser } from "./IUser";

export interface IProps {
  formType: string,
  handleChange: Function,
  handleSignIn: Function,
  handleSingUp: Function,
  changeForm: Function,
  handleClose: Function,
  successReq: string,
  form: IUser,
  requestFailed: {
    message: string;
  },
}
