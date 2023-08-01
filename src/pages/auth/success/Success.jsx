import React from 'react';
import "./success.scss";
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className='success'>
        <h1 className="title">Success!!</h1>
        <p className="desc">your new password has been saved</p>
        <Link to='/login' className='link'>Login</Link>
    </div>
  )
}

export default Success