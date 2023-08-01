
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./login.scss";
import { handleInputs, login } from '../../../utils/methods';
import Loading from '../../../components/loading/Loading';
import { useStateContext } from '../../../context/ContextProvider';

const Login = () => {

    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState();
    const [complete, setComplete] = useState(false);
    const [completeMessage, setCompleteMessage] = useState("");

    const {setUser} = useStateContext();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        login(inputs,setLoading, setComplete, setCompleteMessage, setUser, navigate)
    }
  return (
    <div className='login'>
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
                    
                    <h1 className='title'>Login</h1>
                    <p className="desc">Fill the form below to login</p>
                    <form action="">

                        <div className="inputGroup">
                            <label htmlFor="username">Username or Email:</label>
                            <input type="text" id='username' name='loginId' onChange={(e) => handleInputs(e, setInputs)}/>
                        </div>
                        
                        <div className="inputGroup">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id='password' name='password' onChange={(e) => handleInputs(e, setInputs)}/>
                        </div>
                        
                        <Link className='link' to={"/forgotPassword"}>forgot password?</Link>

                        <button onClick={handleClick}>
                            {
                                loading ? <Loading size={20} color="#243752e7"/> : "Login"
                            }
                        </button>

                        <span className="linkText">Don't have an account yet?<Link className='link' to={"/register"}>Register here</Link></span>
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

export default Login