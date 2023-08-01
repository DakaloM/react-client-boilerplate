import React, { useState } from 'react';
import "./resetPassword.scss"   
import { handleInputs, resetPassword, validateInputs } from '../../../utils/methods';
import Loading from '../../../components/loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [inputs,setInputs] = useState();
    const [complete, setComplete] = useState(false);
    const [completeMessage, setCompleteMessage] = useState("")
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const token = useLocation().pathname.split('/')[2];

   

    const handleClick = async (e) => {
        e.preventDefault();
        complete && setComplete(false)
        if(validateInputs() === false) {
            setComplete(true);
            setCompleteMessage("Error!. Please make sure you have filled all the required fields")
            return;
        }
        else {

            if(inputs.password !== inputs.confPassword) {
                setComplete(true);
                setCompleteMessage("Error!. Passwords do not match");
                return;
            } else {
                const password = inputs.password
                console.log("here")
                await resetPassword(token, password, setLoading, setComplete. setCompleteMessage, navigate)
            }
        }
        
        
        
        
        
    }
  return (
    <div className='resetPassword'>

        <div className="wrapper">

            <h1 className="title">Reset password</h1>

            <form action="" onSubmit={handleClick}>
                <div className="inputGroup">
                    <label htmlFor="newPassword">New password:</label>
                    <input className='input' required type="password" name='password' id="newPassword" onChange={(e) => handleInputs(e, setInputs)}/>
                </div>
                <div className="inputGroup">
                    <label htmlFor="confPassword">Confirm password:</label>
                    <input className='input' required type="password" name='confPassword' id="confPassword" onChange={(e) => handleInputs(e, setInputs)}/>
                </div>

                <button type='submit'>
                    {
                        loading? <Loading size={20} color="#243752e7" /> : "Reset Password"
                    }
                </button>
            </form>

            {
                complete && (

                    completeMessage.startsWith("Success") ?
                        <span className="successText">{completeMessage}</span> :
                        <span className="errorText">{completeMessage}</span> 
                )
            }
        </div>


    </div>
  )
}

export default ResetPassword