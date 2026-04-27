import { END_POINTS } from "../constants/endpoints";
import { getData } from "../lib/axios";

interface DataType {
  message: string;
  status: string;
}

export const getDog = async () => {
  try {
    const response = await getData<DataType>(END_POINTS.randomDogs);

    return response.message;
  } catch (error) {
    console.error("Error fetching:", error);
  }
};
