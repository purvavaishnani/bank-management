import React from 'react'
import { NavLink } from 'react-router-dom';
import 'responsive-navbar-react/dist/index.css'

const NavigationLoggedIn = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/addCustomer'>Register Customer</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationLoggedIn;
