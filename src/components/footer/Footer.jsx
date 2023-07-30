import React from 'react';
import "./footer.scss";
import { HashLink as Link } from 'react-router-hash-link';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Image from '../image/Image';

const Footer = () => {

  
 

  return (
    <div className='footer'>
        <div className="content">
          <div className="section">
            <Image 
              src={"/img/MSCLogo.png"}
              width={100} height={100} objectFit={"contain"}
            />

            
            <div className="socialLinks">

              <Link to="//www.twitter.com" className='link'>
                <Image 
                    src={"/img/twitterIcon.png"}
                    width={35} height={35} objectFit={"contain"}
                />
              </Link>
              <Link to="//www.facebook.com" className='link'>
                <Image 
                    src={"/img/fbookIcon.png"}
                    width={35} height={35} objectFit={"contain"}
                />
              </Link>
              <Link to="//www.instagram.com" className='link'>
                <Image 
                    src={"/img/instaIconBlack.png"}
                    width={35} height={35} objectFit={"contain"}
                />
              </Link>
              <Link to="//www.youtube.com" className='link'>
                <Image 
                    src={"/img/ytIconBlack.png"}
                    width={35} height={35} objectFit={"contain"}
                />
              </Link>
              
            </div>

            <span className="copyRight">&#169; 2023 MCS, All rights reserved</span>
          </div>

          <div className="section">
              <span className="title">Get in Touch</span>

              <div className="item">
                <PhoneInTalkOutlinedIcon className='icon'/>
                <div className="itemItems">
                  <span>(+27) 015 223 4589</span>
                  <span>(+27) 015 223 4598</span>
                </div>
              </div>
              <div className="item">
                <MailOutlineOutlinedIcon className='icon'/>
                <div className="itemItems">
                  <span>mcs@gmail.com</span>
                  <span>info@msc.co.za</span>
                </div>
              </div>

          </div>

          <div className="section links">
              <span className="title">Learn More</span>

              <Link className='link' to="/about#about">About Us</Link>
              <Link className='link' to="/about#ourStory">Our Story</Link>
              <Link className='link' to="/#reasons">Why Choose Us</Link>
              <Link className='link' to="/about#team">Team</Link>
              <Link className='link' to="/#testimonies">Testimonies</Link>
          </div>

          <div className="section">
              <span className="title">Our Newsletter</span>
              <p className="desc">Subscribe to our newsletter to get our news & deals delivered to you.</p>
              <form action="">
                <input type="text" placeholder='Email Address' />
                <button>Join</button>
              </form>
          </div>
        </div>
        
      <span className='author'>Web design and developed by <Link to="//www.dakalo.tech" className='link'>Dakalo Mbulaheni</Link></span>
    </div>
  )
}

export default Footer