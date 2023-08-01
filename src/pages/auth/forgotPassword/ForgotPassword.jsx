import React, { useState } from 'react';
import "./forgotPassword.scss"
import Loading from '../../../components/loading/Loading';
import { forgotPassword } from '../../../utils/methods';

const ForgotPassword = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [complete, setComplete] = useState(false);
    const [completeMessage, setCompleteMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        complete && setComplete(false)

        await forgotPassword(email, setLoading, setComplete, setCompleteMessage);
    }

  
  return (
    <div className='forgotPassword'>
        <div className="wrapper">
            <span className="count">1</span>
            <h1 className='title'>Verify Email</h1>

            <form action="" onSubmit={handleSubmit}>

                <div className="inputGroup">

                    <label htmlFor="email">Enter your email:</label>
                    <input type="email" required id='email' value={email} name = "email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                
                <button type='submit'>
                    {
                        loading? <Loading size={20} color={"white"}/> : "Verify"
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

export default ForgotPassword