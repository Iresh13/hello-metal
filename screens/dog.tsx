import { View, Text, Image, ActivityIndicator } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { QUERIES } from "../constants/queries";
import { getDog } from "../api/getDog";
import Layout from "./layout/layout";
import { imageStyle } from "../styles/image";

const Dog = () => {
  const {
    data: dogs,
    isLoading,
    isRefetching,
  } = useQuery({
    queryKey: [QUERIES.getDog],
    queryFn: () => getDog(),
  });

  const showLoader = isLoading || isRefetching;

  if (showLoader) {
    return (
      <Layout
        styles={{ alignItems: "center", justifyContent: "center", flex: 1 }}
      >
        <ActivityIndicator size="large" color={"#4ade80"} />
      </Layout>
    );
  }

  return (
    <Layout>
      {dogs && !showLoader && <Image src={dogs} style={imageStyle.image} />}
    </Layout>
  );
};

export default Dog;
