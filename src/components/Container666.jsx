import React, { useEffect, useRef, useState } from 'react';
import './index.css';


const Container666 = () => {

    const [isLiked, setIsLiked] = useState(false);
    const [totalLikes, setTotal] = useState(749);

    const handleLike = ()=>{
        if(isLiked){
            setTotal(totalLikes-1)
        }
        else{
            setTotal(totalLikes+1)
        }
    }

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


  return (
    <div className={isVisible ? "Container666 showContainer666" : "Container666"}>        
        <div className="uziqdh zuif">
            <div   className="projectNamek">
                Project Name —
            </div>
            <div ref={ref} className="contentProject">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in felis vitae nunc vehicula viverra. Nulla facilisi. Ut ultricies, sem eu eleifend venenatis, lectus velit consequat justo, nec fermentum sem purus ac elit. Quisque vel metus id mi fringilla tincidunt vel sit amet nisi. Nulla facilisi.
            </div>
            <button className='buttonSeeMoreOfUniqueProject'>
                See More
            </button>
            <button onClick={()=>{setIsLiked(!isLiked);handleLike()}} className='likeBtn'>
            {
                !isLiked ? <i className="fa-regular fa-heart"></i>
                :
                <i className="fa-solid fa-heart fasolidRed"></i>
            }
            </button>
            <span onClick={()=>{setIsLiked(!isLiked);handleLike()}} className="numberLikes">
            {
                totalLikes
            }
            </span>
        </div>
        
        <div className="yzeiq sduiqs">
            <div className="uizfd">
                <img src="https://images.squarespace-cdn.com/content/v1/5f5761db3193933cec5cb485/1599570748394-PUC219IUO520QLKUT1JZ/m9a+bath.jpg?format=500w" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Container666