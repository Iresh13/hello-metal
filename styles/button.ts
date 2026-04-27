import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  default: {
    backgroundColor: "#4ade80",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 5,
  },
  bordered: {
    backgroundColor: "#ffffff",
    borderColor: "#4ade80",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 5,
    borderWidth: 1,
  },
  primary: {
    backgroundColor: "#4ade80",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 5,
  },
});
