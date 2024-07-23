import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../images/Animation - 1721737562833.json';

const LottieAnimation = () => {
  return (
    <div style={{ width: 400, height: 220 }}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottieAnimation;
