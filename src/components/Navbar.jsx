import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import "../assets/styles/navbar.css";

const NavButton = ({ label, onClick }) => {
  return (
    <td onClick={onClick} className="navbar-button" >
      {label}
    </td>
  );
};

NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const Navbar = () => {
  const navigate = useNavigate(); 
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => navigate('/')}>Inicio</li>
        <li onClick={() => navigate('/publicaciones')}>Publicaciones</li>
      </ul>
    </nav>
  );
};

