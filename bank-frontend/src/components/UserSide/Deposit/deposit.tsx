import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './deposit.css';

type depositProps = {
    accNo: string,
    onDeposit: (
        amount: string,
        accNo: string
        ) => void;
};

const Deposit = (props:depositProps) => {

    const navigate = useNavigate();
    const navigateToHome = () => {
      navigate("/home");
    };

    const [accNo,setAccNo] = useState('');
    const [amount, setAmount] = useState('');
    // const [updateAmount, setUpdateAmount] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onDeposit(amount, accNo);
        setAmount('');
        setAccNo('');
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setAmount(e.target.value);
    };

    const handleAccNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setAccNo(e.target.value);
    };

    return (
        <div className='addAccount-page'>
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
                                onChange={handleAccNoChange}
                            /> <br/><br/>
                        </div>
                
                    <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text">Enter Amount to be Deposited:</label>
                            <input
                                type='text'
                                value={amount}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleAmountChange}
                            /> <br/><br/>
                        </div><br></br>

                        {/* <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text">Total Amount:</label>
                            <input
                                type='text'
                                value={amount}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleAmountChange}
                            /> <br/><br/>
                        </div> */}

                        <button style={{cursor:"pointer"}} className='btn btn-warning counter-action decrement'> Deposit </button>
                    </form>
                </div>
            </div>
        </div>


    )
};

export default Deposit;