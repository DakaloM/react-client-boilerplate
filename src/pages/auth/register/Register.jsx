import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./register.scss";
import { handleInputs, register } from '../../../utils/methods';
import Loading from '../../../components/loading/Loading';
import { useStateContext } from '../../../context/ContextProvider';



const Register = () => {

    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState();
    const [complete, setComplete] = useState(false);
    const [completeMessage, setCompleteMessage] = useState("Success message");

    const {setCurrentUser} = useStateContext();
    const navigate = useNavigate();

   
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        complete && setComplete(false)
        if(inputs.password !== inputs.confPassword){
            setComplete(true);
            setCompleteMessage("Error!. Passwords do not match");
            return;
        }
        else {
            await register(inputs, setLoading, setComplete, setCompleteMessage, navigate, setCurrentUser);


        }
    }
  return (
    <div className='register'>
        <div className="container">
            <div className="item left">
               <div className="wrapper">
                <h1 className="title">Welcone to the fastest Auth project</h1>
                <p className="dest">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.
                </p>
               </div>
            </div>

            <div className="item form">

                <div className="wrapper">
                    
                    <h1 className='title'>Register</h1>
                    <p className="desc">Fill the form below to register your credentials</p>
                    <form action="" onSubmit={handleSubmit}>

                        <div className="inputGroup">
                            <label htmlFor="username">Username:</label>
                            <input type="text" required id='username' name='username' onChange={(e) => handleInputs(e, setInputs)}/>
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="email">Email:</label>
                            <input type="email" required id='email' name='email'onChange={(e) => handleInputs(e, setInputs)}/>
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="password">Password:</label>
                            <input type="password" required id='password' name='password'onChange={(e) => handleInputs(e, setInputs)}/>
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="confPassword">Confitm Password:</label>
                            <input type="password" required id='confPassword' name='confPassword'onChange={(e) => handleInputs(e, setInputs)}/>
                        </div>

                        <button type='submit'>
                            {
                                loading ? <Loading size={20} color="#243752e7"/> : "Register"
                            }
                        </button>

                        <span className="linkText">Already have an account?<Link className='link' to={"/login"}>Login here</Link></span>
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
        </div>
    </div>
  )
}

export default Register