import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import AuthContext, { AuthContextType } from '../../context/AuthContext';

type Props = {};

const Login = (props: Props) => {
  const auth = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const navigateToCreatePortfolio = () => {
    navigate("/createPortfolio");
  };
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    console.log("handleLogin");
    try {
      // console.log(email,password);
      const response = await axios.post("http://localhost:9092/login",
      //  {
      //   email: email,
      //   password: password,
      // }
      );

      console.log(response);
      if (response.status == 200 && response.statusText == "OK") {
        // localStorage.setItem('token', response.data.token);
        // localStorage.setItem('userId', response.data._id);
        localStorage.setItem('login', JSON.stringify( response.data));
        auth.isLoggedIn = true;
        // auth.userId = response.data._id;
        navigateToCreatePortfolio();
      } else {
        if (response.status == 500) {
          setErrorMsg(response.data);
        }
      }
    } catch (err : any) {
      setErrorMsg("Invalid Credentials.");
    }
  };

  return (
    <div className="page-style">
      <button onClick={handleLogin}>Redirect to Login</button>
      {localStorage.getItem('login')}
      {/* <LoginForm onLogin={handleLogin} errorMsg={errorMsg}></LoginForm> */}
    </div>
  );
};

export default Login;
