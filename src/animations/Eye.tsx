import 
React,{
  useState,
  useRef,
  useEffect,
} from 'react';

import { TouchableOpacity } from 'react-native';

import LottieView from 'lottie-react-native';
import eye from '@assets/eye.json';

export const Eye = () => {
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