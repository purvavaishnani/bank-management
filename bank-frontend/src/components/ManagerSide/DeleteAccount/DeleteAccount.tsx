import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type DeleteAccountProps = {
    onDeleteAccount: (
        accNo: string
        ) => void;
};

const DeleteAccount = (props:DeleteAccountProps) => {

    const navigate = useNavigate();
    const navigateToHome = () => {
      navigate("/home");
    };

    const [accNo,setAccNo] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onDeleteAccount(accNo);
        setAccNo('');
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
                            <label className="col-sm-2 col-form-label label-text">Enter Account Number To Delete :</label>
                            <input
                                type='text'
                                required = {true} 
                                value={accNo}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleAccNoChange}
                            /> <br/><br/>
                        </div>    

                        <button style={{cursor:"pointer"}} className='btn btn-warning counter-action decrement'> Delete Account </button>
                    </form>
                </div>
            </div>
        </div>


    )
};

export default DeleteAccount;