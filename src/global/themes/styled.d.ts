import 'styled-components';
import theme from './tokes.themes';

declare module 'styled-components' {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType { }
}

