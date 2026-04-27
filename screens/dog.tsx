import { View, Text, Image } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { QUERIES } from "../constants/queries";
import { getDog } from "../api/getDog";

const Dog = () => {
  const { data: dogs } = useQuery({
    queryKey: [QUERIES.getDog],
    queryFn: () => getDog(),
  });

  console.log(dogs);
  return (
    <View>
      <Image src={dogs} width={200} height={200} />
    </View>
  );
};

export default Dog;
