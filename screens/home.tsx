import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../constants/routes";

interface NavigationProps {
  navigate: (screen: string) => void;
}

const Home = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View>
      <Text>Home</Text>

      <Button
        title="Go to next"
        onPress={() => navigation.navigate(ROUTES.dog)}
      ></Button>
    </View>
  );
};

export default Home;
