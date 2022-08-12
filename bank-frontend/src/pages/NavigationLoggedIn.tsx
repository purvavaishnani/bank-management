import React from 'react'
import { NavLink } from 'react-router-dom';
import 'responsive-navbar-react/dist/index.css'

const NavigationLoggedIn = () => {
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
          <NavLink to='/addUser'>Add User</NavLink>
        </li>
        <li>
          <NavLink to='/updateUser'>Update User</NavLink>
        </li>
        {/* <li>
          <NavLink to='/deleteUser'>Delete User</NavLink>
        </li> */}
        <li>
          <NavLink to='/addAccount'>Add Account</NavLink>
        </li>
        <li>
          <NavLink to='/updateAccount'>Update Account</NavLink>
        </li>
        <li>
          <NavLink to='/deleteAccount'>Delete Account</NavLink>
        </li>
        <li>
          <NavLink to='/deposit'>Deposit</NavLink>
        </li>
        <li>
          <NavLink to='/withdrawl'>Withdrawl</NavLink>
        </li>
        <li>
          <NavLink to='/fundTransfer'>Fund Transfers</NavLink>
        </li>
        {/* <li>
          <NavLink to='/fundStatement'>Fund Statement</NavLink>
        </li> */}
        <li>
          <NavLink to='/balanceInquiry'>Balance Inquiry</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationLoggedIn;
