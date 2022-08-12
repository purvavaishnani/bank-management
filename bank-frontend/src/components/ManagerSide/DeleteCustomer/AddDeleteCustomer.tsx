import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type DeleteCustomerProps = {
    onDeleteCustomer: (
        accNo: string
        ) => void;
};


const AddDeleteCustomer = (props:DeleteCustomerProps) => {

    const navigate = useNavigate();
    const navigateToHome = () => {
      navigate("/home");
    };

    const [accNo, setAccNo] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onDeleteCustomer(accNo);
        setAccNo('');
    };

    const handleAcctNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setAccNo(e.target.value);
    };

    return (
        <div className='addAccount-page'>
            <div className='card'>
                <div className='card-body pd-card'>
                    <form onSubmit={handleSubmit} className='col-12'>

                    <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text">Enter Account Number :</label>
                            <input
                                type='text'
                                required = {true} 
                                value={accNo}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleAcctNumChange}
                            /> <br/><br/>
                        </div>                           

                        <button style={{cursor:"pointer"}} className='counter-action decrement'> Search </button>
                       
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

export default AddDeleteCustomer;