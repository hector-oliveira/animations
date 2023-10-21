import { useEffect, useRef, useState } from "react";
import LottieView from 'lottie-react-native';

export const useEye = () => {
  const [isSave, setIsSave] = useState(true);
  const animationRef = useRef<LottieView>(null);
  const isFirstRunRef = useRef(true);

  const handleClickAnimation = () => setIsSave(!isSave);

  useEffect(() => {
    if (isFirstRunRef.current) {
      /** 
       * startFrame and endFrame are the same because
       * the animation is already in the correct state
       * when the app starts.
       * 
       * in the case of the first run, the animation
       * will be played from the startFrame to the endFrame
       * so it'll start with eye close and end with eye close
      */
      const startFrame = isSave ? 8 : 0;
      const endFrame = isSave ? 8 : 0;
      
      animationRef.current?.play(startFrame, endFrame);
      isFirstRunRef.current = false;
    } else {
      /**
       * in the case of the second run, the animation
       * the frames are the different because
       * when the user clicks the button
       * the animation will be played from the startFrame to the endFrame
       */
      
      const startFrame = isSave ? 0 : 8;
      const endFrame = isSave ? 8 : 0;
      animationRef.current?.play(startFrame, endFrame);
    }
  }, [isSave]);

  return {
    animationRef,
    handleClickAnimation,
  };
};