import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { AuthRoutes } from "@routes/auth.routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "@themes/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={ { flex: 1 } }>
        <StatusBar 
          style="light"
          backgroundColor={ theme.colors.bgContainer} 
        />
        <AuthRoutes />
      </SafeAreaView>
    </ThemeProvider>
  );
}