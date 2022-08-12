import React, { useContext, useState } from 'react';
import axios from 'axios';
import DeleteAccount from './DeleteAccount';
import { Navigate } from 'react-router-dom';

type DeleteAccountProps={};

const PostDeleteAccount = (props: DeleteAccountProps) => {

    const handleDeposit = async (accNo: string) => {
        console.log(accNo);
        try {
            const response = await axios.delete(
                'http://localhost:9092/api/manager/deleteAccount/'+ accNo
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='page-style'>
            <DeleteAccount onDeleteAccount={handleDeposit}></DeleteAccount>
        </div>
    );
};

export default PostDeleteAccount;