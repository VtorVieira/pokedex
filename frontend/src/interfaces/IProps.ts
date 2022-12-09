import { IUser } from "./IUser";

export interface IProps {
  formType: string,
  handleChange: Function,
  handleSignIn: Function,
  handleSingUp: Function,
  changeForm: Function,
  handleClose: Function,
  successReq: string,
  loading: boolean,
  form: IUser,
  requestFailed: {
    message: string;
  },
}
