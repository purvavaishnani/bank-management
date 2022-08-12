import React, { useContext } from 'react';
import axios from 'axios';
import Account from './UpdateAccount';
import { Navigate } from 'react-router-dom';
import './UpdateAccount.css';

type AccProps={};

const UpdateAccountPost = (props: AccProps) => {
    const handleAccount = async (accNumber: string,accHolderName : string,accType: string,openDate: string,balance: string,customerId: string) => {
        try {
            const response = await axios.post(
                'http://localhost:9092/api/manager/updateAccount',
                {
                    accNumber: accNumber,
                    accHolderName: accHolderName,
                    accType: accType,
                    openDate: openDate,
                    accStatus: "True",
                    balance: balance,
                    customer: customerId
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='page-style'>
            <Account updateAcc={handleAccount}></Account>
        </div>
    );
};

export default UpdateAccountPost;