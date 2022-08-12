import React, { useContext } from 'react';
import axios from 'axios';
import AddFundTransfer from './AddFundTransfer';
import { Navigate } from 'react-router-dom';

type WithdrawProps={};

const WithdrawPost = (props: WithdrawProps) => {
    const handleWithdraw = async (amount: any, fromAccount: string, toAccount: string, desc: string) => {
        console.log(fromAccount,toAccount,amount);
        try {
            const response = await axios.post(
                'http://localhost:9092/api/customer/fundTransfer',
                {
                    transactionAmount: amount,
                    fromAccount: {
                        accNumber: fromAccount 
                    },
                    toAccount: {
                        accNumber: toAccount
                    },
                    transactionDescription: desc,
                    transactionType: "TRANSFER"
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='page-style'>
            <AddFundTransfer onFundTransfer={handleWithdraw}></AddFundTransfer>
        </div>
    );
};

export default WithdrawPost;