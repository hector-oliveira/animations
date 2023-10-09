import { useEffect, useRef, useState } from "react";
import LottieView from 'lottie-react-native';

export const useEye = () => {
  const [isSave, setIsSave] = useState(true);
  const animationRef = useRef<LottieView>(null);
  const isFirstRunRef = useRef(true);

  const handleClickAnimation = () => setIsSave(!isSave);

  useEffect(() => {
    if (isFirstRunRef.current) {
      const startFrame = isSave ? 8 : 0;
      const endFrame = isSave ? 8 : 0;
      animationRef.current?.play(startFrame, endFrame);
      isFirstRunRef.current = false;
    } else {
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