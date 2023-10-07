import { ThemeProvider } from "styled-components";
import theme from "@themes/tokes.themes"
import { StatusBar } from "expo-status-bar";
import { AuthRoutes } from "@routes/auth.routes";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar 
          style="dark" 
          backgroundColor="transparent" 
        />
        <AuthRoutes />
      </SafeAreaView>
    </ThemeProvider>
  );
}