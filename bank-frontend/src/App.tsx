import { useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import LanguageContext from './context/LanguageContext';
import ColorContext from './context/ColorContext';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './pages/Footer';
import Navigation from './pages/Navigation';
import AuthContext from './context/AuthContext';
import NavigationLoggedIn from './pages/NavigationLoggedIn';
import Login from './components/Login/Login';
import AddUser from './components/ManagerSide/AddUser/AddUserPost';
import AddAccount from './components/ManagerSide/Account/AccountPost';
import UpdateUser from './components/ManagerSide/UpdateUser/UpdateUserPost';
import Deposit from './components/UserSide/Deposit/depositPost';
import Withdrawl from './components/UserSide/Withdrawl/withdrawlPost';
import FundTransfer from './components/ManagerSide/FundTransfer/PostFundTransfer';
import FundStatement from './components/ManagerSide/Statement/TransferStatement';
import UpdateAccount from './components/ManagerSide/UpdateAccount/UpdateAccountPost';
import BalanceInquiry from './components/ManagerSide/GetBalance/PostGetBalance';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  const [lang, setLang] = useState('english');
  const [navBarLoad, setNavBarLoad] = useState(< Navigation />);
  if (isLoggedIn == true) {
    setNavBarLoad(< NavigationLoggedIn />);
  }
  return (
    <div>
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <LanguageContext.Provider value={lang}>
          <ColorContext.Provider value='blue'>
          < Navigation />
            
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path='about' element={<About />} />
              {/* <Route path='login' element={<Login />} /> */}
              <Route path='addUser' element={<AddUser />} />
              <Route path='updateUser' element={<UpdateUser />} />
              <Route path='addAccount' element={<AddAccount />} />
              <Route path='updateAccount' element={<UpdateAccount />}> </Route>
              <Route path='deposit' element={<Deposit />} />
              <Route path='withdrawl' element={<Withdrawl />} />
              <Route path='fundTransfer' element={<FundTransfer />}></Route>
              <Route path='fundStatement' element={<FundStatement />}></Route>
              <Route path='balanceInquiry' element={<BalanceInquiry />}></Route>
            </Routes>
            <Footer />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </AuthContext.Provider>
      <div className='App'>
        React Context Text {lang}
        <button onClick={() => setLang('English')}>English</button>
        <button onClick={() => setLang('French')}>French</button>
      </div>
    </div>
  );
        };

export default App;