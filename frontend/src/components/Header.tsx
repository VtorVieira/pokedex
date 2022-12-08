import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg'
import { FiLogOut } from 'react-icons/fi';

function Header() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    localStorage.removeItem('token');
    navigate('/form');
  };

  return (
    <nav className="flex justify-between items-center bg-gradient-to-l from-indigo-600 to-blue-300 mt-4 ml-2 mr-2 rounded-md md:ml-16 md:mr-16">
      <div className='w-80 mt-2 mb-2 ml-4'>
        <img
          className='rounded-lg w-20'
          src={logo}
          alt="Logo" />
      </div>
      <button type="button" onClick={handleClick} className="mr-2 text-white text-2xl font-bold">
        <FiLogOut />
      </button>
    </nav>
  );
}

export default Header;
