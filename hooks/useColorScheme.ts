/*

Color Scheme hook for dark mode/light mode based on device settings, including change listeners.

Extracted functionality to this file such that if we ever need to expand upon the functionality of light/dark
mode management, we can do so here and return the values from a centralised location.

Returns "light", "dark", or null if unavailable.

Available on iOS 13+ and Android 10+ (API level 29)

*/

import { useColorScheme as colorScheme } from "react-native";
import { DeviceTheme } from "@/theme";

const useColorScheme = (): DeviceTheme => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return colorScheme() as DeviceTheme;
};

export default useColorScheme;
