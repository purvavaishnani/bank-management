import { NavLink } from 'react-router-dom';
import 'responsive-navbar-react/dist/index.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink 
          to='/'
          className="header__nav" 
          >
          Home</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
    
      </ul>
    </nav>

  );
};
export default Navigation;
