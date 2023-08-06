import React, { useEffect, useRef, useState } from 'react';
import './index.css';

const Container2 = () => {
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
    <div className="Container2">
      <div className="uizd">
        <div className="ud">
          What We Do
        </div>
        <div className="uifqds" >
          We are a combined imaginative brand and online workshop. <br /> Blending artistry with tactics, we fashion truly distinct identities and encounters supported by a potent online influence, captivating audiences in a busy globe.
        </div>
      </div>
    </div>
  );
}

export default Container2;
