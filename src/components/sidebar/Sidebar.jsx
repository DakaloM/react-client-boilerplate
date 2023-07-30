import React, { useState } from 'react';
import "./sidebar.scss";
import CancelIcon from '@mui/icons-material/Cancel';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion, useAnimate, useAnimation, useScroll } from 'framer-motion';
import { Scale } from '@mui/icons-material';

const Sidebar = ({open, setOpen}) => {

  const [closeSidebar, setCloseSidebar] = useState(false)
  const animate = useAnimation()
  return (
    <div className={open? 'sidebar active' : 'sidebar'}>
        <div className="wrapper">
          <CancelIcon className='closeIcon' onClick={() => setOpen(false)}/>
          <div className="logo">

              <img src="/img/MSCLogo.png" alt="" />
              <div className="name">
                  <span className='title'><span>M</span>ulti <span>S</span>olutions <span>C</span>atalyst</span>
                  <span className='slogan'>Identifying Possibilities. Creating Possible Future</span>
              </div>

             
          </div>

          <p className='text'>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
          </p>
          <h3 className='heading'>Contact Info</h3>

          <div className="items">
            <div className="item">
              <PhoneInTalkOutlinedIcon className='icon'/>
              <span>064 2225 9874</span>
            </div>
            <div className="item">
              <MailOutlinedIcon className='icon'/>
              <span>msc@info.co.za</span>
            </div>
            <div className="item">
              <LocationOnOutlinedIcon className='icon'/>
              <span>Merlin street, RodenVale Midrand 1685</span>
            </div>
          </div>
          <h3 className='heading'>Follow Us</h3>
          <div className="icons">
            <motion.span
              animate = {animate}
              whileHover={{scale: 1.2}}
            >
              <FacebookIcon className='icon'/>
            </motion.span>

            <motion.span  
                animate = {animate}
                whileHover={{scale: 1.2}}
            >
              <InstagramIcon className='icon'/>
            </motion.span>

            <motion.span
              animate = {animate}
              whileHover={{scale: 1.2}}
            >
              <TwitterIcon className='icon'/>

            </motion.span>

            <motion.span
              animate = {animate}
              whileHover={{scale: 1.2}}
            >
               <LinkedInIcon className='icon'/>
            </motion.span>
          </div>
        </div>
    </div>
  )
}

export default Sidebar