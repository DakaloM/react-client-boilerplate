import React from 'react';
import "./home.scss";
import { useStateContext } from '../../context/ContextProvider'

const Home = () => {
  const {user} = useStateContext();
  return (
    <div className='home'>
      <h1 className="title"> Welcome to the home page</h1>
      <span>{user.username}</span>
      <span>{user.email}</span>
    </div>
  )
}

export default Home