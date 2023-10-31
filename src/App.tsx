import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "@themes/theme";
import { AuthRoutes } from "@routes/auth.routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={ { flex: 1 } }>
        <StatusBar 
          style="light"
          backgroundColor={ theme.colors.status_bar} 
        />
        <AuthRoutes />
      </SafeAreaView>
    </ThemeProvider>
  );
}