import React, { useState } from 'react';
import "./carousel.scss";
import { carouselList } from '../../dummyData';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { slides } from '../../data/data';
import {HashLink as Link} from 'react-router-hash-link'


const MultiCarousel = () => {
  const [list , setList] = useState([]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 
  return (
    <div className='carousel'>

       
       
        <Carousel  
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            
        >
            {slides.map(product =>(
                <div className='card' key={product.id}>
                    
                    <div className="imgContainer">
                        <img src={product.img} 
                        alt="[sofware development] digital marketing" />
                    </div>
                    
                    <div className="info">

                        
                        <h1 className="mainTitle">{product.title}</h1>
                        <p className="mainDesc">{product.desc}</p>
                        <Link to="/services#products"  className='button'>Find out more</Link>
                        
                        
                    </div>
                    <div className="wrapper">
                      
                    </div>

                </div>
            ))}
            
            
        </Carousel>
    </div>
  )
}

export default MultiCarousel