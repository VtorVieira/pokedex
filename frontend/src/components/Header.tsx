import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg'
import { FiLogOut } from 'react-icons/fi';
import { verifyToken } from '../services/requests';

function Header() {
  const [user, setUser] = useState<string>('')
  const navigate = useNavigate();

  /* useEffect para carregamento da primeira lista de pokemons */
  useEffect(() => {
    async function getName() {
      const localToken = JSON.parse(localStorage.getItem('token') as string) || [];
      const logged = await verifyToken(localToken.token);
      setUser(logged);
    }
    getName();
  },[]);

  const handleClick = () => {
    localStorage.removeItem('token');
    navigate('/form');
  };

  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-indigo-400 to-blue-400 mt-4 ml-2 mr-2 rounded-md">
      <div className='flex justify-center items-center w-80 mt-2 mb-2'>
        <img
          className='rounded-lg w-20'
          src={logo}
          alt="Logo" />
        <p className='ml-5 font-bold text-white'>Bem-vindo(a): {user}</p>
      </div>
      <button type="button" onClick={handleClick} className="mr-2 text-white text-2xl font-bold">
        <FiLogOut />
      </button>
    </nav>
  );
}

export default Header;
