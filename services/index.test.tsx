import { Movie } from "types";
import * as APIService from "./index";
import axios from "axios";
import { movies as data } from "../constant/data";

jest.mock("axios");
const MockAxios = axios as jest.Mocked<typeof axios>;

test("Api call", async () => {
  MockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        results: data,
      },
    })
  );
  const movies: Movie[] = await APIService.getMovies();
  expect(movies).toBeInstanceOf(Array);
  expect(movies.length).toBe(2);

  // checking the data types
  expect(movies[0]).toBeInstanceOf(Object);
  verifyResponseProperties(movies[0]);

  expect(movies[0]).toBe(data[0]);
  expect(movies[1]).toBe(data[1]);
});

const verifyResponseProperties = (movie: Movie) => {
  const expectedProps = [
    "id",
    "title",
    "overview",
    "poster_path",
    "release_date",
    "vote_average",
    "vote_count",
    "popularity",
  ];
  expectedProps.forEach((prop) => {
    expect(movie).toHaveProperty(prop);
  });
};
