import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import { useState } from 'react';
import React from "react";
import AddUserForm from "./components/ManagerSide/AddUser/AddUser";
import UpdateUserForm from "./components/ManagerSide/UpdateUser/UpdateUser";
import ShowUser from "./components/ManagerSide/DisplayUser/DisplayUserPost";
import Account from "./components/ManagerSide/Account/Account";
const App = () => {
  return (
    <div>
      
        <Routes>
          <Route path="/test" element={<AddUserForm onAdd={function (accType: any, prefix: string, firstName: string, lastName: string, contactNo: string, email: string, dob: string, address: string, city: string, state: string): void {
          throw new Error("Function not implemented.");
        } } />} />
        <Route path="/update/null" element={<UpdateUserForm onUpdate={function (accType: any, prefix: string, firstName: string, lastName: string, contactNo: string, email: string, dob: string, address: string, city: string, state: string): void {
          throw new Error("Function not implemented.");
        } } accNo={"1234567890"} />} />
        
        <Route path="/display" element={<ShowUser/>} />
        <Route path="/account" element={<Account addAcc={function (accNumer: string, accHolderName: string, accType: string, openDate: string, accStatus: string, balance: string, Transaction: string): void {
          throw new Error("Function not implemented.");
        } }/>} />
        
        </Routes>
    </div>
  );
        };

export default App;