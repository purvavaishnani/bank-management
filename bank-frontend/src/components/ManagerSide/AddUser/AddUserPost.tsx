import React, { useContext } from 'react';
import axios from 'axios';
import AddUser from './AddUser';
import { Navigate } from 'react-router-dom';
import './AddUser.css';

type AddProps={};

const AddUserPost = (props: AddProps) => {
    const handleAdd = async (accType: any,prefix : string,firstName: string,lastName: string,contactNo: string,email: string,dob: string,address: string,city: string,state: string) => {
        try {
            const response = await axios.post(
                'http://localhost:8000/api/add_user',
                {
                    accNo: localStorage.getItem("AccNo"),
                    accType: accType,
                    prefix: prefix,
                    firstName: firstName,
                    lastName: lastName,
                    contactNo: contactNo,
                    email: email,
                    dob: dob,
                    address: address,
                    city: city,
                    state: state
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='page-style'>
            <AddUser onAdd={handleAdd}></AddUser>
        </div>
    );
};

export default AddUserPost;