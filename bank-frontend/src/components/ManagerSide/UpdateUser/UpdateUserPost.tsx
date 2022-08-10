import React, { useContext } from 'react';
import axios from 'axios';
import UpdateUser from './UpdateUser';
import { Navigate } from 'react-router-dom';
import './AddUser.css';

type AddProps={};

const UpdateUserPost = (props: AddProps) => {
    const handleUpdate = async (accType: any,prefix : string,firstName: string,lastName: string,contactNo: string,email: string,dob: string,address: string,city: string,state: string) => {
        try {
            const response = await axios.post(
                'http://localhost:8000/api/update_user',
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
            <UpdateUser onUpdate={handleUpdate} accNo={'1234567890'}></UpdateUser>
        </div>
    );
};

export default UpdateUserPost;