import React, { useContext } from 'react';
import axios from 'axios';
import Deposit from './deposit';
import { Navigate } from 'react-router-dom';
import './AddUser.css';

type DepositProps={};

const DepositPost = (props: DepositProps) => {
    const handleDeposit = async (amount: string, updateAmount: string) => {
        try {
            const response = await axios.post(
                'http://localhost:8000/api/deposit',
                {
                    accNo: localStorage.getItem("AccNo"),
                    amount: amount,
                    updateAmount: updateAmount
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='page-style'>
            <Deposit onDeposit={handleDeposit} accNo={''}></Deposit>
        </div>
    );
};

export default DepositPost;