import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../images/Animation - 1730970107357.json';

const LottieAnimation = () => {
  return (
    <div style={{ width: 300, height: 200 }}>
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
