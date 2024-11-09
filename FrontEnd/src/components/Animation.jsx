import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../images/Animation - 1731155367822.json';

const LottieAnimation = () => {
  return (
    <div style={{ width: '100%', maxWidth: '700px', height: 'auto', margin: '0 auto' }}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default LottieAnimation;
