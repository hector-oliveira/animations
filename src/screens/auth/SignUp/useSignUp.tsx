import { FontAwesome, Fontisto } from '@expo/vector-icons';
import { theme } from '@themes/theme';

export const useSignUp = (isClicked: boolean) => {
  const handleIconRendering = () => {
    return isClicked ? (
      <FontAwesome
        name='check'
        size={18}
        color={theme.colors.lightColor[900]}
        backgroundColor={theme.colors.check}
      />
    ) : (
      <Fontisto
        name='checkbox-passive'
        size={18}
        color={theme.colors.darkColor[800]}
      />
    );
  }

  return { handleIconRendering }
}