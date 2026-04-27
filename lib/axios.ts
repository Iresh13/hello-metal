import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 5000,
});

export async function getData<O>(endpoint: string) {
  const res = await axiosClient.get(endpoint);

  return res.data as O;
}
