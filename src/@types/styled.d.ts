import 'styled-components/native'
import { theme } from '@themes/theme';
import { DefaultTheme } from 'styled-components/native';


declare module 'styled-components/native' {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
