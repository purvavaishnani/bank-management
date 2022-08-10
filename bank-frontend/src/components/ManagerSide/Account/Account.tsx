import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Account.css'

type AddAccount = {
    addAcc: (
        accNumer: string,
        accHolderName: string,
        accType: string,
        openDate: string,
        accStatus: string,
        balance: string,
        Transaction: string
    ) => void;
};

const Account = (props: AddAccount) => {


    const navigate = useNavigate();
    const navigateToUpdateForm = () => {
      navigate("/update/" + localStorage.getItem("accNumber"));
    };
  
    function navigateToDisplay() {
      navigate("/display");
    }

    const [accNumber, setAccNumber] = useState('');
    const [accHolderName, setAccHolderName] = useState('');
    const [accType, setAccType] = useState('');
    const [openDate, setOpenDate] = useState('');
    const [accStatus, setAccStatus] = useState('');
    const [balance, setBalance] = useState('');
    const [transaction, setTransaction] = useState('');

    const [myEvents, setMyEvents] = React.useState();
     
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.addAcc(accNumber, accHolderName, accType, openDate, accStatus, balance, transaction);
        setAccNumber('');
        setAccHolderName('');
        setAccType('');
        setOpenDate('');
        setAccStatus('');
        setBalance('');
        setTransaction('');
    };

    const handleAccNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setAccNumber(e.target.value);
    }

   const handleAccHolderChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setAccHolderName('');
   }

   const handleAccTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setAccType('');
   }

   const handleOpenDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setOpenDate('');
   }

   const handleAccStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setAccStatus('');
   }

   const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setBalance('');
   }

   const handleTransactionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setTransaction('');
   }


    const isSelected = (value: string): boolean => true;

    

    return (
        <div className='addAccount-page'>
            <div className='card'>
                <div className='card-body pd-card'>
                    <form onSubmit={handleSubmit} className='col-12'>
                       

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Account Number :</label>
                            <input
                                type='text'
                                value={accNumber}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleAccNumChange}
                            /> <br/><br/>
                        </div>

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Account Holder Name :</label>
                            <input
                                type='text'
                                value={accHolderName}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleAccHolderChange}
                            /> <br/><br/>
                        </div>

                  
                        <div className='form-row mt-2 mb-2 input-text' >
                        <label className="col-sm-2 col-form-label label-text"> Account Type: </label>
                            <input
                                type='radio'
                                name='radio-btn'
                                 value='save'
                                className="form-control col-sm-10"
                                onChange={handleAccTypeChange}
                                checked={isSelected('savings')}
                            /> Savings <br/><br/>
                             <input
                                type='radio'
                                name='radio-btn'
                                 value='chq'
                                className="form-control col-sm-10"
                                onChange={handleAccTypeChange}
                                checked={isSelected('chequing')}
                            /> Chequing <br/><br/>
                        </div>
                        
                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Open Date :</label>
                            <input
                                type='text'
                                value={openDate}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleOpenDateChange}
                            /> <br/><br/>
                        </div>

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Account Status :</label>
                            <input
                                type='text'
                                value={accStatus}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleAccStatusChange}
                            /> <br/><br/>
                        </div>

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Balance :</label>
                            <input
                                type='text'
                                value={balance}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleBalanceChange}
                            /> <br/><br/>
                        </div>

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Transaction :</label>
                            <input
                                type='text'
                                value={transaction}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleTransactionChange}
                            /> <br/><br/>
                        </div>
                        
                        <div className="bm-cta-container mt-4">
                        <button className='btn btn-primary' type='submit' > Add Account</button>
                        <button className="btn btn-primary" onClick={navigateToUpdateForm}>
                            <span>Update</span>
                        </button>
                        <button className='btn btn-primary' type='submit'>
                            <span>Delete</span>
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Account;