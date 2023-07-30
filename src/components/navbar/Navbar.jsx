import React, { useContext, useEffect, useReducer, useState } from 'react';
import "./navbar.scss";
import {useLocation, useParams } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import { motion, useAnimation, variants, useScroll } from 'framer-motion';
import { useStateContext } from '../../context/ContextProvider';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navbar = ({}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openSidebar, setOpenSidebar] = useState(false);
  const {screenSize, setScreenSize} = useStateContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation().pathname.split('/')[1]


  useEffect(() => {
    const list = document.querySelectorAll('.navLink');
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove('active')

      const val = list[i].innerHTML.split(' ')[0].toLowerCase();
      if(val === location) {
        list[i].classList.add('active')
        
      }
      else if(location === ""){

        const link = (list[i].classList.value.split(" ")[1])
        if(link === "homeLink"){
          list[i].classList.add('active')
        }

      }


    }
  }, [location])
  
  

  const handleMenuClick = (e) => {
      
      const list = document.querySelectorAll('.navLink');
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
      }
      e.target.classList.add('active');
      
      setMenuOpen(false)
      
  }


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize)

    handleResize();

    return () =>  window.removeEventListener("resize", handleResize)
  },[])




  const animate = useAnimation();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }
  
  useEffect(() =>{
    if(scrollPosition < 1000) {
      animate.start ({
        y: 200,
        opacity: 0
      })
    }else {
      animate.start({
        y: 0,
        opacity: 1
      })
    }
},[scrollPosition])



  return (
    <div className={scrollPosition >= 30 ? "navbar scrolled " : "navbar "} >
          <div className={openSidebar? "container" : "container sidebarClosed"}>


          <motion.div onClick={scrollTop} className={scrollPosition >= 600 ? "scrollButton scrolled" : "scrollButton"}
              animate = {animate}
              whileHover={{scale: 1.1}}
          >
            <NorthOutlinedIcon className='icon' />
          
          </motion.div>

          
           <div className="bottom">
              <div className="logo">
                  <Link className='link imgContainer' to="/" onClick={handleMenuClick}>
                    <img src="/img/MSCLogo.png" alt="sofware development business management" />
                  </Link>

                  <span className="menuButton" onClick={() => setMenuOpen(prev => !prev)}>
                    <MenuOutlinedIcon  className='icon'/>

                  </span>
                  
                  {/* <div className="name">
                      <span className='title'><span>M</span>ulti <span>S</span>olutions <span>C</span>atalyst</span>
                      <span className='slogan'>Identifying Possibilities. Creating Possible Future</span>
                  </div> */}
              </div>
              <div className={menuOpen? scrollPosition >= 30 ? "menu scrolled open" : "menu open" : scrollPosition >= 30 ? "menu scrolled " : "menu"}>
                  <div className={scrollPosition >= 30 ? "wrapper scrolled" : "wrapper"}>
                    <ul>
                        <Link onClick={handleMenuClick} className='link' to='/home#top'><li className={"navLink homeLink"}>Home</li></Link>
                        <Link onClick={handleMenuClick} className='link' to='/services#top'><li className={"navLink"}>Services</li></Link>
                        <Link onClick={handleMenuClick} className='link' to='/contact#top'><li className={"navLink"}>Contact us</li></Link>
                        <Link onClick={handleMenuClick} className='link' to='/about#top'><li className={"navLink"}>About</li></Link>
                        <Link onClick={handleMenuClick} className='link' to='/blog#top'><li className={"navLink"}>Blog</li></Link>
                    </ul>
                  </div>
                <div className="contactInfo">
                  <PhoneInTalkIcon className='icon'/>
                  <span>
                    Phone Number
                    <span>066 548 2222</span>
                  </span>
                  
                </div>
              </div>


              

              
           </div>
        </div>
    </div>
  )
}

export default Navbar