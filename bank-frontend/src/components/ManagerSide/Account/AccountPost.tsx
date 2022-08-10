import React, { useContext } from 'react';
import axios from 'axios';
import Account from './Account';
import { Navigate } from 'react-router-dom';
import './AddUser.css';

type AccProps={};

const AccountPost = (props: AccProps) => {
    const handleAccount = async (accNumber: string,accHolderName : string,accType: string,openDate: string,accStatus: string,balance: string,Transaction: string) => {
        try {
            const response = await axios.post(
                'http://localhost:8000/api/account',
                {
                    accNumber: accNumber,
                    accHolderName: accHolderName,
                    accType: accType,
                    openDate: openDate,
                    accStatus: accStatus,
                    balance: balance,
                    Transaction: Transaction
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='page-style'>
            <Account addAcc={handleAccount}></Account>
        </div>
    );
};

export default AccountPost;