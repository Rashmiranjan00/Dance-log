import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import useColorScheme from "@/hooks/useColorScheme";
import { DeviceTheme, getTheme } from "@/theme";
import { ThemeProvider } from "styled-components";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const currentTheme = getTheme(colorScheme || DeviceTheme.Light);
  const [loaded] = useFonts({
    "MaisonNeue-Bold": require("../assets/fonts/maisonneue-bold.otf"),
    "TTCommons-Medium": require("../assets/fonts/ttcommons-medium.otf"),
    "TTCommons-Regular": require("../assets/fonts/ttcommons-regular.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
