import React, { ChangeEventHandler } from 'react';
import { IProps } from '../interfaces/IProps';
import logo from '../images/logo.svg';

export function SignInUp(
  { formType,
    handleChange,
    handleSignIn,
    handleSingUp,
    changeForm,
    form,
    requestFailed,
  }: IProps) {

  return (
    <div
      className='flex justify-center h-screen font-bold text-lg bg-cover bg-center bg-[url("../images/background.svg")] md:items-center'
    >
      <form className='bg-gradient-to-r from-indigo-800 to-blue-400 rounded-lg border-spacing-0 border-solid border-2 h-screen w-96 md:h-2/3 md:w-2/4 xl:w-1/3 2xl:w-1/4'>
        <div className='flex justify-center items-center w-96 mt-2 md:w-full '>
          <img
            className={formType === 'Sign In' ? 'rounded-lg w-56 mt-5' : 'rounded-lg w-56'}
            src={logo}
            alt="Logo" />
        </div>
        <div className='flex justify-center items-center mt-10 text-2xl text-[#fff]'>
          {formType === 'Sign In' ? 'Login' : 'Cadastro'}
        </div>
        <div className='flex flex-col gap-2 justify-center items-center mt-8'>
          {
            formType === 'Sign Up'
            &&
            (
              <>
                <div>
                  <input
                    className='rounded-md text-slate-800 placeholder-gray-500 w-80 h-10 p-3 shadow-lg focus:outline-none focus:ring focus:ring-blue-400 md:w-96'
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
                    className='rounded-md text-slate-800 placeholder-gray-500 w-80 h-10 p-3 shadow-lg focus:outline-none focus:ring focus:ring-blue-400 md:w-96'
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
              className='rounded-md text-slate-800 placeholder-gray-500 w-80 h-10 p-3 shadow-lg focus:outline-none focus:ring focus:ring-blue-400 md:w-96'
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
              className='rounded-md text-slate-800 placeholder-gray-500 w-80 h-10 p-3 shadow-lg focus:outline-none focus:ring focus:ring-blue-400 md:w-96'
              id="password"
              name="password"
              value={form.password}
              type="password"
              placeholder={formType === 'Sign In' ? 'Informe o sua senha' : 'Cadastre a sua senha'}
              onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
            />
          </div>
          <div className='w-80 border-red-500 border-l-4 md:w-96'>
            <p className=' text-[#ffff] ml-2'>{requestFailed.message}</p>
          </div>
        </div>
        <div className='flex justify-center items-center mt-8'>
          <button
            className='rounded-xl w-80 h-11 bg-[#5e17eb] text-[#fff] md:w-96'
            type='button'
            onClick={formType === 'Sign In' ? handleSignIn : handleSingUp as any}
          >
            {formType === 'Sign In' ? 'Entrar' : 'Cadastrar'}
          </button>
        </div>
        {formType === 'Sign In'
          ? <div className='flex justify-center items-center mt-4'>
            <button
              className='rounded-xl w-80 h-11 bg-[#5e17eb] text-[#fff] md:w-96'
              type='button'
              onClick={() => changeForm('Sign Up')}
            >
              {formType === 'Sign In' && 'Ainda não tem conta? Cadastre-se'}
            </button>
          </div>
          : <div className='flex justify-center items-center mt-4'>
            <button
              className='rounded-xl w-80 h-11 bg-[#5e17eb] text-[#fff] md:w-96'
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
