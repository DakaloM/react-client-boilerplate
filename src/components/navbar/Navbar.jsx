import React, { useContext, useEffect, useReducer, useState } from 'react';
import "./navbar.scss";
import {useLocation, useParams } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import { motion, useAnimation, variants, useScroll } from 'framer-motion';
import { useStateContext } from '../../context/ContextProvider';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { logout } from '../../utils/methods';

const Navbar = ({}) => {
  
  const {setUser} = useStateContext();



  return (
    <div className= "navbar ">
         <div className="container" onClick={() => logout(setUser)}>
            <button className='logout'>Logout</button>
         </div>
    </div>
  )
}

export default Navbar