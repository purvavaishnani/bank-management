import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type withdrawProps = {
    onFundTransfer: (
        amount: any,
        fromAccount: string,
        toAccount: string,
        desc: string
        ) => void;
};


const FundTransfer = (props:withdrawProps) => {

    const navigate = useNavigate();
    const navigateToHome = () => {
      navigate("/home");
    };

    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onFundTransfer(amount, fromAccount, toAccount, desc);
        setAmount('');
        setFromAccount('');
        setToAccount('');
        setDesc('');
        // navigateToHome();
    };

    const handleToAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setAmount(e.target.value);
    };

    const handleFromAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setFromAccount(e.target.value);
    };

    const handleToAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setToAccount(e.target.value);
    };

    const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setDesc(e.target.value);
    };

    return (
        <div className='addAccount-page'>
            <div className='card'>
                <div className='card-body pd-card'>
                    <form onSubmit={handleSubmit} className='col-12'>

                    <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> From Account Number :</label>
                            <input
                                type='text'
                                required = {true} 
                                value={fromAccount}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleFromAccountChange}
                            /> <br/><br/>
                        </div>

                    <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> To Account Number :</label>
                            <input
                                type='text'
                                required = {true} 
                                value={toAccount}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleToAccountChange}
                            /> <br/><br/>
                        </div>
                
                    <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text">Enter Amount to Transfer:</label>
                            <input
                                type='text'
                                value={amount}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleToAddChange}
                            /> <br/><br/>
                        </div>

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text">Description:</label>
                            <input
                                type='text'
                                value={desc}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleDescChange}
                            /> <br/><br/>
                        </div>
                        <button style={{cursor:"pointer"}} className='counter-action decrement'> Transfer Funds </button>
                       
                        {/* <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text">Total Amount:</label>
                            <input
                                type='text'
                                value={amount}
                                size={30}
                                className="form-control col-sm-10"
                                //onChange={handleAmountChange}
                            /> <br/><br/>
                        </div> */}

                    </form>
                </div>
            </div>
        </div>


    )
};

export default FundTransfer;