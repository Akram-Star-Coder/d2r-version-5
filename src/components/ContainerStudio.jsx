import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import MARK from '../store/mark.png';
import POINT from '../store/point.png';
import { useNavigate } from 'react-router-dom';

const ContainerStudio = () => {

  const naviagte=useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This will be executed after the component has rendered
    window.scrollTo(0, 0); // Scrolls to the top (x, y) coordinates (0, 0)

    // Alternatively, you can use the following line to scroll smoothly to the top
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const x = ()=>{
      setIsVisible(true);
    }
    x();
  }, []);


  return (
    <>
    <div   className={!isVisible ? "ContainerStudio removeMargin" : 'ContainerStudio removeMargin showContainerStudio' }>
        <span className='euui'>ABOUT</span>
        <div className="aboutUsContext">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in felis vitae nunc vehicula viverra. Nulla facilisi. Ut ultricies, sem eu eleifend venenatis.
          </p>
          <p>
          Quisque vel metus id mi fringilla tincidunt vel sit amet nisi. Nulla facilisi. Curabitur efficitur dolor et urna consequat lacinia. Sed aliquam mauris eget est faucibus, quis vestibulum elit mattis.
          </p>
        </div>
    </div>
    <div   className={!isVisible ? "ContainerStudio" : 'ContainerStudio showContainerStudio' }>
        <span className='euui'>VALUES</span>
        <div className="aboutUsContext ">
          <div className="rowValues">
            <img src={MARK} alt="" />
            <div className="jjj">
              Business ethics
            </div>
          </div>
          <div className="rowValues">
            <img src={MARK} alt="" />
            <div className="jjj">
              Innovation
            </div>
          </div>
          <div className="rowValues">
            <img src={MARK} alt="" />
            <div className="jjj">
              Open-mindedness
            </div>
          </div>
          <div className="rowValues">
            <img src={MARK} alt="" />
            <div className="jjj">
              Artistic direction
            </div>
          </div>
          <div className="rowValues">
            <img src={MARK} alt="" />
            <div className="jjj">
              The art of service
            </div>
          </div>
          
        </div>
    </div>


    <div   className={!isVisible ? "ContainerStudio" : 'ContainerStudio showContainerStudio' }>
        <span className='euui'>SERVICES</span>
        <div className="aboutUsContext ">
          <div onClick={()=>{naviagte('/work')}} className="rowValues rowValues1">
            <img src={POINT} alt="" />
            <div  className="jjj">
            Interior 3D Rendering
            </div>
          </div>
          <div  onClick={()=>{naviagte('/work')}} className="rowValues rowValues1">
            <img src={POINT} alt="" />
            <div   className="jjj">
            Exterior 3D Rendering
            </div> 
          </div>
          <div  onClick={()=>{naviagte('/work')}}  className="rowValues rowValues1">
            <img src={POINT} alt="" />
            <div   className="jjj">
            3D Animation
            </div>
          </div>
          <div  onClick={()=>{naviagte('/work')}}  className="rowValues rowValues1">
            <img src={POINT} alt="" />
            <div   className="jjj">
            360° Panorama
            </div>
          </div>
          <div  onClick={()=>{naviagte('/work')}}  className="rowValues zeui">
            <button>View all work <i className="yizdfyiqi fa-solid fa-arrow-right"></i></button>
          </div>

          
          
        </div>
    </div>
    <div   className={!isVisible ? "ContainerStudio" : 'ContainerStudio showContainerStudio' }>
        <span className='euui'>CONTACT</span>
        <div className="aboutUsContext">
          <div className="dui">
          For new project enquiries, please get in touch with us:
          <br />
          • &nbsp;admin@d2r.com
          <br />
          • &nbsp;+212 649 902 055
          </div>
        </div>
    </div>

    </>
  )
}

export default ContainerStudio