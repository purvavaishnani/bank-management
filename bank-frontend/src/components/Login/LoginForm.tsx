import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type AddProps = {
    onLogin: (email: string, password: string) => void;
    errorMsg : String;
};
const LoginForm = (props: AddProps) => {
    const navigate = useNavigate();
    const navigateToSignUpPage = () => {
        navigate("/signup")
    }

    const navigateToCreatePortfolio = () => {
        navigate("/createPortfolio")
    }

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mandatoryFieldErrorMsg, setMandatoryFieldErrorMsg] = useState('');
    const [emailValidationErrorMsg, setEmailValidationErrorMsg] = useState('');
    const [passwordValidationErrorMsg, setPasswordValidationErrorMsg] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setEmail(e.target.value);
        setMandatoryFieldErrorMsg("");
        // if (!regex.test(email)) {
        //     setEmailValidationErrorMsg("Invalid Email id.")
        // } else {
        //     setEmailValidationErrorMsg("");
        // }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setPassword(e.target.value);
        setMandatoryFieldErrorMsg("");
        // if (!passwordRegex.test(password)) {
        //     setPasswordValidationErrorMsg("Invalid Password. \n It should have more than 8 characters. \n One digit, one alphabet, one special character.");
        // } else {
        //     setPasswordValidationErrorMsg("");
        // }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log("handle submit");
        e.preventDefault();
        setEmailValidationErrorMsg("");
        setPasswordValidationErrorMsg("");
        if (email == "" && password == "") {
            setMandatoryFieldErrorMsg("This field is mandatory.")
        }
        // else if (!regex.test(email)) {
        //     setEmailValidationErrorMsg("Invalid Email id.")
        // } else if (!passwordRegex.test(password)) {
        //     setPasswordValidationErrorMsg("Invalid Password. \n It should have more than 8 characters. \n One digit, one alphabet, one special character.");
        // }
        else {
            props.onLogin(email, password);
        }
    };

    return (

        <div className='addAccount-page'>
        <div className='card'>
            <div className='card-body pd-card'>
                <form onSubmit={handleSubmit} className='col-12'>

                {/* <div className="form-row mt-2 mb-2 input-text">
                        <label className="col-sm-2 col-form-label label-text"> Email ID :</label>
                        <input
                            type='text'
                            required = {true} 
                            value={email}
                            size={30}
                            className="form-control col-sm-10"
                            onChange={handleEmailChange}
                        /> 
                        <span className='errorMsg'>{mandatoryFieldErrorMsg}</span>
                        <span className='errorMsg'>{emailValidationErrorMsg}</span>
                        <br/><br/>
                    </div>  

                     <div className="form-row mt-2 mb-2 input-text">
                        <label className="col-sm-2 col-form-label label-text"> Password :</label>
                        <input
                            type='text'
                            required = {true} 
                            value={password}
                            size={30}
                            className="form-control col-sm-10"
                            onChange={handlePasswordChange}
                        /> 
                        <span className='errorMsg'>{mandatoryFieldErrorMsg}</span>
                        <span className='errorMsg new-line'>{passwordValidationErrorMsg}</span>
                        <br/><br/>
                    </div>   */}

                    <button style={{cursor:"pointer"}} className='btn btn-warning counter-action decrement'> Redirect to Login </button>
                </form>
            </div>
        </div>
    </div>

    );
};

export default LoginForm;
