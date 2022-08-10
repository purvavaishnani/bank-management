import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddUser.css'

type AddUser = {
    onAdd: (
        accType: any,
        prefix : string,
        firstName: string,
        lastName: string,
        contactNo: string,
        email: string,
        dob: string,
        address: string,
        city: string,
        state: string
    ) => void;
};

const AddUserForm = (props: AddUser) => {


    const navigate = useNavigate();
    const navigateToUpdateForm = () => {
      navigate("/update/" + localStorage.getItem("accNumber"));
    };
  
    function navigateToDisplay() {
      navigate("/display");
    }

    const {accNo} = useParams();
    const [accType, setAccType] = useState('');
    const [prefix, setPrefix] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onAdd(accType,prefix,firstName,lastName,contactNo,email,dob,address,city,state);
        setAccType('');
        setPrefix('');
        setFirstName('');
        setLastName('');
        setContactNo('');
        setEmail('');
        setDob('');
        setAddress('');
        setCity('');
        setState('');
    };

    const handleAccChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
         setAccType(e.target.value);
    };

    const handlePreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setPrefix(e.target.value);
    };

    const handleFnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setFirstName(e.target.value);
    };

    const handleLnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setLastName(e.target.value);
    };

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setContactNo(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setEmail(e.target.value);
    };

    const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setDob(e.target.value);
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setAddress(e.target.value);
    };

    const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setCity(e.target.value);
    };

    const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setState(e.target.value);
    };

    const isSelected = (value: string): boolean => true;

    

    return (
        <div className='addUser-page'>
            <div className='card'>
                <div className='card-body pd-card'>
                    <form onSubmit={handleSubmit} className='col-12'>
                       
                    
                  <div className='SelectRadio'>
                        <div className='form-row mt-2 mb-2 input-text' >
                        <label className="col-sm-2 col-form-label label-text"> Account Type:
                            <input
                                type="radio"
                                name='radio-btn'
                                 value='save'
                                className="form-control col-sm-10"
                                onChange={handleAccChange}
                                checked={isSelected('savings')}
                            /> Savings 
                             <input
                                type="radio"
                                name='radio-btn'
                                 value='chq'
                                className="form-control col-sm-10"
                                onChange={handleAccChange}
                                checked={isSelected('chequing')}
                            /> Chequing
                             </label>
                        </div>
                        </div>

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Prefix :</label>
                            <input
                                type='text'
                                value={prefix}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handlePreChange}
                            /> <br/><br/>
                        </div>

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> First Name :</label>
                            <input
                                type='text'
                                value={firstName}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleFnameChange}
                            /> <br/><br/>
                        </div>

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Last Name :</label>
                            <input
                                type='text'
                                value={lastName}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleLnameChange}
                            /> <br/><br/>
                         </div>

                         <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Contact Number :</label>
                            <input
                                type='text'
                                value={contactNo}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleContactChange}
                            /> <br/><br/>
                        </div>

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Email:</label>
                            <input
                                type='text'
                                value={email}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleEmailChange}
                            /> <br/><br/>
                        </div>

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Date of Birth :</label>
                            <input
                                type='text'
                                value={dob}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleDobChange}
                            /> <br/><br/>
                        </div>

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> Address :</label>
                            <input
                                type='text'
                                value={address}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleAddressChange}
                            /> <br/><br/>
                        </div>

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> City :</label>
                            <input
                                type='text'
                                value={city}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleCityChange}
                            /> <br/><br/>
                        </div>

                        <div className="form-row mt-2 mb-2 input-text">
                            <label className="col-sm-2 col-form-label label-text"> State :</label>
                            <input
                                type='text'
                                value={state}
                                size={30}
                                className="form-control col-sm-10"
                                onChange={handleStateChange}
                            /> <br/><br/>
                        </div>
                        <br/><br/>
                    <div className="bm-cta-container mt-4">
                        <button className='btn btn-primary' type='submit' > Add User</button>
                        <button className="btn btn-primary" onClick={navigateToUpdateForm}>
                            <span>Update </span>
                        </button>
                        <button className='btn btn-primary' type='submit'>
                            <span>Delete </span>
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUserForm;