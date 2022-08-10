import React, { useContext } from 'react';
import axios from 'axios';
import Withdraw from './withdrawl';
import { Navigate } from 'react-router-dom';
import './withdrawl.css';

type WithdrawProps={};

const WithdrawPost = (props: WithdrawProps) => {
    const handleWithdraw = async (amount: string, updateAmount: string) => {
        try {
            const response = await axios.post(
                'http://localhost:8000/api/withdraw',
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
            <Withdraw onWithdraw={handleWithdraw}  accNo={''}></Withdraw>
        </div>
    );
};

export default WithdrawPost;