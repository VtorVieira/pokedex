import { FaLinkedin, FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center bg-gradient-to-l from-indigo-600 to-blue-300 text-base mt-1 ml-4 mr-4 py-3 rounded-lg text-[#ffff] font-bold xl:text-xl xl:ml-16 xl:mr-16'>
      <h3>PokeDex</h3>
      <div className='flex justify-center items-center text-base gap-3 xl:text-xl'>
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
      <p>React, Tailwind, NodeJs, Postgres, Sequelize</p>
    </footer>
  );
}
