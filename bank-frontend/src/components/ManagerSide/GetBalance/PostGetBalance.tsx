import React, { useContext, useState } from 'react';
import axios from 'axios';
import GetBalance from './GetBalance';
import { Navigate } from 'react-router-dom';

type GetBalanceProps={};

const GetBalancetPost = (props: GetBalanceProps) => {
    const [myBal, setMyBal] = useState(''); 

    const handleDeposit = async (accNo: string) => {
        console.log(accNo);
        try {
            const response = await axios.get(
                'http://localhost:9092/api/manager/balanceEnquiry/'+ accNo +'/1'
            );
            setMyBal(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='page-style'>
            <GetBalance onGetBalance={handleDeposit}></GetBalance>

            <label style={{color:"blue",fontSize:"24px",fontFamily:"monospace",textAlign:"center"}}>{myBal}</label>
        </div>
    );
};

export default GetBalancetPost;