import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateAccount.css';

type AddAccount = {
    updateAcc: (
        accNumer: string,
        accHolderName: string,
        accType: string,
        openDate: string,
        accStatus: string,
        balance: string,
        Transaction: string
    ) => void;
};

const UpdateAccount = (props: AddAccount) => {


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
    const [custId, setCustIdStatus] = useState('');
    const [balance, setBalance] = useState('');
    const [transaction, setTransaction] = useState('');

    const [myEvents, setMyEvents] = React.useState();
     
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.updateAcc(accNumber, accHolderName, accType, openDate, custId, balance, transaction);
        setAccNumber('');
        setAccHolderName('');
        setAccType('');
        setOpenDate('');
        setCustIdStatus('');
        setBalance('');
        setTransaction('');
    };

    const handleAccNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setAccNumber(e.target.value);
    }

   const handleAccHolderChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setAccHolderName(e.target.value);
   }

   const handleAccTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setAccType(e.target.value);
   }

   const handleOpenDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setOpenDate(e.target.value);
   }

   const handleCustIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setCustIdStatus(e.target.value);
   }

   const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setBalance(e.target.value);
   }

   const handleTransactionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setTransaction(e.target.value);
   }


    const isSelected = (value: string): boolean => true;

    

    return (
        <div className='addAccount-page'>
            <div className='card'>
                <div className='card-body pd-card'>
                    <form onSubmit={handleSubmit} className='col-12'>
                       

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text">Enter Account Number to Update:</label>
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
                        <label className="col-sm-12 col-form-label label-text" style={{width:"50%"}}> Account Type: <br></br>
                            <input
                                type='radio'
                                name='radio-btn'
                                 value='SAVING'
                                className="form-control col-sm-10"
                                onChange={handleAccTypeChange}
                                // checked={isSelected('savings')}
                            /> Savings
                             <input
                                type='radio'
                                name='radio-btn'
                                 value='CHEQUING'
                                className="form-control col-sm-10"
                                onChange={handleAccTypeChange}
                                // checked={isSelected('chequing')}
                            /> Chequing <br/><br/>
                            </label>
                        </div>
                        
                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Open Date :</label>
                            <input
                                type='date'
                                value={openDate}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleOpenDateChange}
                            /> <br/><br/>
                        </div>

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Customer ID :</label>
                            <input
                                type='text'
                                value={custId}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleCustIdChange}
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

                        {/* <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Transaction :</label>
                            <input
                                type='text'
                                value={transaction}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleTransactionChange}
                            /> <br/><br/>
                        </div> */}
                        
                        <div className="bm-cta-container mt-4">
                        <button className='btn btn-primary' style={{cursor:"pointer"}} type='submit' > Update Account</button>
                        <button className="btn btn-primary" style={{cursor:"pointer"}} onClick={navigateToUpdateForm}>
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

export default UpdateAccount;