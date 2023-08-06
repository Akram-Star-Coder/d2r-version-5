import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Container10 = () => {

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
      const element = ref.current;
      if (element) {
      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight);
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
      window.removeEventListener('scroll', handleScroll);
      };
  }, []);

    const navigate= useNavigate();

  return (
    <div className='Container10'>
        <div className={isVisible ? "iiil showiiil" : "iiil"}>
            Want to see more? 
        </div>
        <div   className={isVisible ? "uiqdf showuiqdf" : "uiqdf"}>
            Check out our <span onClick={()=>{navigate('/work')}} >Projects!<div ref={ref} class="underline"></div></span>
        </div>
    </div>
  )
}

export default Container10