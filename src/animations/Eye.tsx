import React from 'react';
import { TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import eye from '@assets/eye.json';
import { useEye } from '@hooks/useEye';

export const Eye = () => {
  const { animationRef, handleClickAnimation } = useEye();
  return (
    <TouchableOpacity onPress={handleClickAnimation}>
      <LottieView
        source={eye}
        autoPlay={false}
        loop={false}
        style={{ width: 50, height: 50 }}
        resizeMode='cover'
        ref={animationRef}
      />
    </TouchableOpacity>
  );
};