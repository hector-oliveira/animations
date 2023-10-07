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
  const [save, setSave] = useState(true);
  const animation = useRef<LottieView>(null);
  const isFirstRun = useRef(true);
  
  const handleClickAnimation = () => setSave(!save);

  useEffect(() => {
    if(isFirstRun.current){
      if(save && animation.current){
        animation.current?.play(8,8);
      } else {
        animation.current?.play(0,0);
      }
      
      isFirstRun.current = false;
    }else if(save) {
      animation.current?.play(0,8);
    } else {
      animation.current?.play(8,0);
    }
  }, [save]);

  
  return(
    <TouchableOpacity onPress={handleClickAnimation}>
      <LottieView 
        source={eye}
        autoPlay={false}
        loop={false}
        style={{ width: 50, height: 50 }}
        resizeMode='cover'
        ref={animation}
        
        
      />
    </TouchableOpacity>
  );
}