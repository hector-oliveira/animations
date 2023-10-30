import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "@themes/theme";
import { AuthRoutes } from "@routes/auth.routes";
import { AppRoutes } from "@routes/app.routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={ { flex: 1 } }>
        <StatusBar 
          style="dark"
          backgroundColor={ theme.color.light[800]} 
        />
        <AppRoutes />
        {/* <AuthRoutes /> */}
      </SafeAreaView>
    </ThemeProvider>
  );
}