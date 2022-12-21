import { FaLinkedin, FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center bg-gradient-to-r from-indigo-400 to-blue-400 text-sm mt-1 ml-2 mr-2 py-3 rounded-lg text-[#ffff] font-bold xl:text-xl'>
      <h3>PokeDex</h3>
      <div className='flex justify-center items-center md:text-base gap-3 xl:text-xl'>
        <p>Created by <span>Vitor Vieira</span> &copy; 2022</p>
        <label htmlFor="linkedIn">
          {' '}
          <abbr title="https://www.linkedin.com/in/vtorvieira/">
            <a className='text-lg xl:text-2xl' href="https://www.linkedin.com/in/vtorvieira/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </abbr>
        </label>
        <label htmlFor="gitHub">
          {' '}
          <abbr title="https://github.com/VtorVieira">
            <a className='text-lg xl:text-2xl' href="https://github.com/VtorVieira" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </abbr>
        </label>
      </div>
      <p>React, Tailwind, Daisyui, NodeJs, Postgres, Sequelize</p>
    </footer>
  );
}
