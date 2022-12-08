import React, { ChangeEventHandler } from 'react';
import { IProps } from '../interfaces/IProps';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import logo from '../images/logo.svg';

export function SignInUp(
  { formType,
    handleChange,
    handleSignIn,
    handleSingUp,
    changeForm,
    handleClose,
    successReq,
    form,
    requestFailed,
  }: IProps) {

  return (
    <div
      className='flex justify-center h-screen font-bold text-lg bg-cover bg-center bg-[url("../images/background.svg")] sm:items-center'
    >
      <form className='bg-gradient-to-r from-indigo-800 to-blue-400 h-screen w-screen border-spacing-0 border-solid sm:w-96 sm:border-2 sm:rounded-lg sm:h-2/3 md:w-2/4 md:h-3/4 lg:h-2/3 lg:w-2/4 xl:w-1/3 2xl:w-1/3'>
        <div className='flex justify-center items-center w-full mt-2'>
          <img
            className={formType === 'Sign In' ? 'rounded-lg w-56 mt-5 md:mt-1' : 'rounded-lg w-56'}
            src={logo}
            alt="Logo" />
        </div>
        <div className='flex justify-center items-center mt-10 text-2xl text-[#fff]'>
          {formType === 'Sign In' ? 'Login' : 'Cadastro'}
        </div>
        <div className='flex flex-col gap-2 justify-center items-center mt-4'>
          {
            formType === 'Sign Up'
            &&
            (
              <>
                <div>
                  <input
                    className='rounded-md text-slate-800 placeholder-gray-500 w-80 h-10 p-3 shadow-lg focus:outline-none focus:ring focus:ring-blue-400 xl:w-96'
                    id="name"
                    name="name"
                    value={form.name}
                    type="text"
                    placeholder='Cadastre o seu nome'
                    onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
                  />
                </div>
                <div>
                  <input
                    className='rounded-md text-slate-800 placeholder-gray-500 w-80 h-10 p-3 shadow-lg focus:outline-none focus:ring focus:ring-blue-400 xl:w-96'
                    id="fone"
                    name="fone"
                    value={form.fone}
                    type="text"
                    placeholder='Cadastre o seu telefone'
                    onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
                  />
                </div>
              </>
            )
          }
          <div>
            <input
              className='rounded-md text-slate-800 placeholder-gray-500 w-80 h-10 p-3 shadow-lg focus:outline-none focus:ring focus:ring-blue-400 xl:w-96'
              id="email"
              name="email"
              value={form.email}
              type="text"
              placeholder={formType === 'Sign In' ? 'Informe o seu email' : 'Cadastre o seu email'}
              onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
            />
          </div>
          <div>
            <input
              className='rounded-md text-slate-800 placeholder-gray-500 w-80 h-10 p-3 shadow-lg focus:outline-none focus:ring focus:ring-blue-400 xl:w-96'
              id="password"
              name="password"
              value={form.password}
              type="password"
              placeholder={formType === 'Sign In' ? 'Informe o sua senha' : 'Cadastre a sua senha'}
              onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
            />
          </div>
          <div className='w-80 border-red-500 border-l-4 xl:w-96'>
            <p className=' text-[#ffff] ml-2'>{requestFailed.message}</p>
          </div>
        </div>
        <div className='flex justify-center items-center mt-8'>
        <AlertDialog.Trigger
          className='rounded-xl w-80 h-11 bg-[#5e17eb] text-[#fff] xl:w-96'
          type='button'
          onClick={formType === 'Sign In' ? handleSignIn : handleSingUp as any}
        >
          {formType === 'Sign In' ? 'Entrar' : 'Cadastrar'}
        </AlertDialog.Trigger>
        </div>
        {successReq === 'Usuário criado com sucesso!' && 
          <AlertDialog.Portal>
            <AlertDialog.Overlay className='bg-black/60 inset-0 fixed' />
              <AlertDialog.Content className='fixed w-80 bg-[#2A2634] p-3 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25'>
                <AlertDialog.Description className='text-xl'>
                  {successReq}
                </AlertDialog.Description>
                <div className='flex justify-end'>
                    <button className='border-solid border-2 rounded-md p-1' onClick={handleClose as any}>OK</button>
                </div>
              </AlertDialog.Content>
          </AlertDialog.Portal>
        }
        {formType === 'Sign In'
          ? <div className='flex justify-center items-center mt-4'>
            <button
              className='rounded-xl w-80 h-11 bg-[#5e17eb] text-[#fff] xl:w-96'
              type='button'
              onClick={() => changeForm('Sign Up')}
            >
              {formType === 'Sign In' && 'Ainda não tem conta? Cadastre-se'}
            </button>
          </div>
          : <div className='flex justify-center items-center mt-4'>
            <button
              className='rounded-xl w-80 h-11 bg-[#5e17eb] text-[#fff] xl:w-96'
              type='button'
              onClick={() => changeForm('Sign In')}
            >
              {formType === 'Sign Up' && 'Volta para Login'}
            </button>
          </div>
        }
      </form>
    </div>
  );
}
