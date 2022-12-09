import React, { useState } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../interfaces/IUser';
import { postLogin, postRegister } from '../services/requests';
import { IErrorMEssage } from '../interfaces/IError';
import { SignInUp } from '../components/SignInUp';

function Login() {
  const [form, setForm] = useState<IUser>({
    name: '',
    fone: '',
    email: '',
    password: '',
  });
  const [requestFailed, setRequestFailed] = useState<IErrorMEssage>({ message: '' });
  const [successReq, setSuccessReq] = useState<string>('');
  const [formType, setFormType] = useState<string>('Sign In');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState!,
      [name]: value,
    }));
  };

  const handleSignIn = async () => {
    try {
      const generateToken = await postLogin(form?.email, form?.password);
      localStorage.setItem('token', JSON.stringify(generateToken));
      navigate('/main', { replace: true });
    } catch (error: any) {
      setRequestFailed({ message: error.response.data.message });
    }
  };

  const handleSingUp = async () => {
    setLoading(true);
    try {
      await postRegister(form?.name, form?.fone, form?.email, form?.password);
      setSuccessReq('Usuário criado com sucesso!')
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setRequestFailed({ message: error.response.data.message });
    }
  };
  
  const handleClose = () => {
    navigate('/', { replace: true });
  };

  const changeForm = (value: string) => {
    setRequestFailed({ message: '' });
    setForm({
      name: '',
      fone: '',
      email: '',
      password: '',
    });
    setFormType(value);
  };

  return (
    <AlertDialog.Root>
      <SignInUp
        form={form}
        formType={formType}
        requestFailed={requestFailed}
        successReq={successReq}
        loading={loading}
        changeForm={changeForm}
        handleClose={handleClose}
        handleChange={handleChange}
        handleSignIn={handleSignIn}
        handleSingUp={handleSingUp}
      />
    </AlertDialog.Root>
  );
}

export default Login;
