import { View, Text, Button, Vibration, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../constants/routes";
import * as Haptics from "expo-haptics";
import Layout from "./layout/layout";
interface NavigationProps {
  navigate: (screen: string) => void;
}

const Home = () => {
  const navigation = useNavigation<NavigationProps>();

  const onPressHelloMetal = () => {
    Vibration.cancel();
    Vibration.vibrate(100);

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    setTimeout(() =>
      Alert.alert("Hello Metal", "Metal Button Pressed", [
        {
          text: "OK",
        },
      ]),
    );
  };

  return (
    <Layout>
      <Text>Hello Metal</Text>

      <Button
        title="Hello Metal"
        onPress={() => {
          onPressHelloMetal();
        }}
      ></Button>

      <Button
        title="Go to next"
        onPress={() => navigation.navigate(ROUTES.dog)}
      ></Button>
    </Layout>
  );
};

export default Home;
