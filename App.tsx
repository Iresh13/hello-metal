import Dog from "./screens/dog";
import Home from "./screens/home";
import { ROUTES } from "./constants/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationProvider } from "./providers/navigation";
import { QueryProvider } from "./providers/query";

const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.home}
        component={Home}
        options={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name={ROUTES.dog}
        component={Dog}
        options={{
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <QueryProvider>
      <NavigationProvider>
        <Screens />
      </NavigationProvider>
    </QueryProvider>
  );
}
