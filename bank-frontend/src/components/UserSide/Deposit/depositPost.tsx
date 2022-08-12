import React, { useContext } from 'react';
import axios from 'axios';
import Deposit from './deposit';
import { Navigate } from 'react-router-dom';

type DepositProps={};

const DepositPost = (props: DepositProps) => {
    const handleDeposit = async (amount: string, accNo: string) => {
        console.log(accNo,amount);
        try {
            const response = await axios.post(
                'http://localhost:9092/api/customer/deposit',
                {
                    transactionAmount: amount,
                    toAccount:{
                        accNumber: accNo
                    }
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