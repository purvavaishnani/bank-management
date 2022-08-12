import React, { useContext } from 'react';
import axios from 'axios';
import AddFundTransfer from './AddDeleteCustomer';
import { Navigate } from 'react-router-dom';

type DeleteCustomerProps={};

const DeleteCustomerPost = (props: DeleteCustomerProps) => {
    const handleDeleteCustomer = async (accNo: string) => {
        try {
            const response = await axios.post(
                'http://localhost:9092/api/manager/deleteCustomer/' + accNo
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='page-style'>
            <AddFundTransfer onDeleteCustomer={handleDeleteCustomer}></AddFundTransfer>
        </div>
    );
};

export default DeleteCustomerPost;