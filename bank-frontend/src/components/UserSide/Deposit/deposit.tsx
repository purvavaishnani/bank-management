import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './deposit.css';

type depositProps = {
    accNo: string,
    onDeposit: (
        amount: string,
        updateAmount: string
        ) => void;
};

const Deposit = (props:depositProps) => {

    const navigate = useNavigate();
    const navigateToHome = () => {
      navigate("/home");
    };

    const {accNo} = useParams();
    const [amount, setAmount] = useState('');
    const [updateAmount, setUpdateAmount] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onDeposit(amount, updateAmount);
        setAmount('');
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setAmount(e.target.value);
    };

    const handleToAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setUpdateAmount(e.target.value);
    };

    return (
        <div className='deposit-page'>
            <div className='card'>
                <div className='card-body pd-card'>
                    <form onSubmit={handleSubmit} className='col-12'>

                    <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Account Number :</label>
                            <input
                                type='text'
                                required = {true} 
                                value={accNo}
                                size={30}
                                className="form-control col-sm-10"
                            /> <br/><br/>
                        </div>
                
                    <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text">Enater Amount to be Deposited:</label>
                            <input
                                type='text'
                                value={updateAmount}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleToAddChange}
                            /> <br/><br/>
                        </div>

                        <button className='counter-action decrement'> Deposit </button>
                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text">Total Amount:</label>
                            <input
                                type='text'
                                value={amount}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleAmountChange}
                            /> <br/><br/>
                        </div>

                    </form>
                </div>
            </div>
        </div>


    )
};

export default Deposit;