import { Movie } from "types";
import axios from "axios";
import { BASE_URL } from "../constant/index";

export const getMovies = async () => {
  const response = await axios(
    `${BASE_URL}?api_key=${process.env.API_KEY}&language=en-US&page=${1}`
  );
  const data = response.data;
  const movies: Movie[] = data?.results;
  return movies;
};
