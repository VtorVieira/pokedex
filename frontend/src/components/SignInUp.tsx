import React, { ChangeEventHandler } from 'react';
import { IProps } from '../interfaces/IProps';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import background from '../images/background.svg'
import Loading from './Loading';

export function SignInUp(
  { formType,
    handleChange,
    handleSignIn,
    handleSingUp,
    changeForm,
    handleClose,
    loading,
    successReq,
    form,
    requestFailed,
  }: IProps) {

  return (
    <div
      className='grid grid-cols-1 sm:grid-cols-2 h-screen w-screen'
    >
      {
       loading && <Loading />
      }
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={background} alt="" />
      </div>
      <div className='flex flex-col justify-center'>
        <form className='bg-gradient-to-r from-indigo-400 to-blue-400 max-w-[480px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
          <h2 className='text-4xl text-white font-bold text-center'>
            {formType === 'Sign In' ? 'Login' : 'Cadastro'}
          </h2>
          <div className=''>
            {
              formType === 'Sign Up'
              &&
              (
                <div>
                  <div className='flex flex-col text-white font-bold py-2'>
                    <label>Nome</label>
                    <input
                      className='rounded-lg text-gray-700 mt-2 p-2 focus:border-blue-500 focus:border-2 focus:outline-none'
                      id="name"
                      name="name"
                      value={form.name}
                      type="text"
                      placeholder='Cadastre o seu nome'
                      onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
                    />
                  </div>
                  <div className='flex flex-col text-white font-bold py-2'>
                    <label>Telefone</label>
                    <input
                      className='rounded-lg text-gray-700 mt-2 p-2 focus:border-blue-500 focus:border-2 focus:outline-none'
                      id="fone"
                      name="fone"
                      value={form.fone}
                      type="text"
                      placeholder='Cadastre o seu telefone'
                      onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
                    />
                  </div>
                </div>
              )
            }
             <div className='flex flex-col text-white font-bold py-2'>
               <label>Email</label>
               <input
                 className='rounded-lg mt-2 p-2 text-gray-700 focus:border-blue-500 focus:border-2 focus:outline-none'
                 id="email"
                 name="email"
                 value={form.email}
                 type="text"
                 placeholder={formType === 'Sign In' ? 'Informe o seu e-mail' : 'Cadastre o seu e-mail'}
                 onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
               />
             </div>
             <div className='flex flex-col text-white font-bold py-2'>
               <label>Password</label>
               <input
                 className='rounded-lg mt-2 p-2 text-gray-700 focus:border-blue-500 focus:border-2 focus:outline-none'
                 id="password"
                 name="password"
                 value={form.password}
                 type="password"
                 placeholder={formType === 'Sign In' ? 'Informe o sua senha' : 'Cadastre a sua senha'}
                 onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
               />
             </div>
            <div className='border-l-4 border-red-900 font-bold'>
              <p className=' text-[#ffff] ml-2'>{requestFailed.message}</p>
            </div>
          </div>
          <div className='flex justify-between text-white font-bold py-2'>
            <AlertDialog.Trigger
              className='w-full my-5 py-2 bg-[#5e17eb] shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
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
          <div>
            {formType === 'Sign In'
              ? <div>
                <button
                  className='w-full my-5 py-2 bg-[#5e17eb] shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
                  type='button'
                  onClick={() => changeForm('Sign Up')}
                >
                  {formType === 'Sign In' && 'Ainda não tem conta? Cadastre-se'}
                </button>
              </div>
              : <div>
                <button
                  className='w-full my-5 py-2 bg-[#5e17eb] shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
                  type='button'
                  onClick={() => changeForm('Sign In')}
                >
                  {formType === 'Sign Up' && 'Voltar para Login'}
                </button>
              </div>
            }
          </div>
        </form>
      </div>
    </div>
  );
}
