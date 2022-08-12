import React, { useContext } from 'react';
import axios from 'axios';
import Withdraw from './withdrawl';
import { Navigate } from 'react-router-dom';
import './withdrawl.css';

type WithdrawProps={};

const WithdrawPost = (props: WithdrawProps) => {
    const handleWithdraw = async (amount: string, accNo: string) => {
        console.log(accNo,amount);
        try {
            const response = await axios.post(
                'http://localhost:9092/api/customer/withdraw',
                {
                    transactionAmount: amount,
                    fromAccount:{
                        accNumber: accNo
                    }
                }
            );
        } catch (err) {
            // alert("Insufficient Balance or Account Does Not Exist.")
            console.log(err);
        }
    };

    return (
        <div className='page-style'>
            <Withdraw onWithdraw={handleWithdraw} ></Withdraw>
        </div>
    );
};

export default WithdrawPost;