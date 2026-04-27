import Dog from "./screens/dog";
import Home from "./screens/home";
import { ROUTES } from "./constants/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationProvider } from "./providers/navigation";
import { QueryProvider } from "./providers/query";
import {
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  useFonts,
} from "@expo-google-fonts/open-sans";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "./providers/theme";
import { Switch } from "react-native";
import { useTheme } from "./hooks/use-theme";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

const Screens = () => {
  const { toggle, isDarkState, selectedTheme } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.home}
        component={Home}
        options={{
          headerTransparent: true,
          headerRight: () => (
            <Switch onValueChange={toggle} value={isDarkState} />
          ),
          headerTintColor: selectedTheme.text.color,
        }}
      />
      <Stack.Screen
        name={ROUTES.dog}
        component={Dog}
        options={{
          headerTransparent: true,
          headerTintColor: selectedTheme.text.color,
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const [loaded, error] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <ThemeProvider>
      <QueryProvider>
        <NavigationProvider>
          <Screens />
        </NavigationProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
