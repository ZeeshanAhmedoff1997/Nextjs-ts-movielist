import Index from "@/components/Card/Card";
import { render, screen } from "@testing-library/react";

import { Movie } from "types";

let movie: Movie = {
  id: 123,
  overview: "A movie to watch",
  popularity: 414,
  release_date: "2022-08-08",
  title: "Best Movie",
  vote_count: 123,
};

describe("Card Component", () => {
  it("renders a card is rendering with all data", () => {
    const { getByTestId } = render(<Index movie={movie} />);
    expect(getByTestId("test-movie-popularity")).toHaveTextContent("414");
    expect(getByTestId("test-movie-overview")).toHaveTextContent(
      "A movie to watch"
    );
    expect(getByTestId("test-movie-release_date")).toHaveTextContent(
      "2022-08-08"
    );
    expect(getByTestId("test-movie-title")).toHaveTextContent("Best Movie");
    expect(getByTestId("test-movie-vote_count")).toHaveTextContent("123");
  });

  it("when vote count is less than 3000 it should not add the recommended tag", () => {
    const { getByTestId } = render(<Index movie={movie} />);
    expect(getByTestId("test-movie-vote_count")).not.toHaveTextContent(
      "Recommended"
    );
  });
  it("when vote count is greater than 3000 it should add the recommended tag", () => {
    const { getByTestId } = render(
      <Index movie={{ ...movie, vote_count: 4000 }} />
    );
    expect(getByTestId("test-movie-vote_count")).toHaveTextContent(
      "Recommended"
    );
  });

  it("when movie is adult type it should add the adult tag", () => {
    const { getByTestId } = render(<Index movie={{ ...movie, adult: true }} />);
    expect(getByTestId("test-movie-popularity")).toHaveTextContent("( Adult )");
  });

  it("when movie is adult type it should add the adult tag", () => {
    const { getByTestId } = render(<Index movie={{ ...movie, adult: true }} />);
    expect(getByTestId("test-movie-popularity")).toHaveTextContent("( Adult )");
  });

  it("when we pass original lanugaue in movie props, it should not be showing in the component", () => {
    render(<Index movie={{ ...movie, original_language: "Original Title" }} />);
    expect(screen.queryByText("Original Title")).not.toBeInTheDocument();
  });

  it("when the poster path is not present, then image only contain the alt", async () => {
    render(<Index movie={movie} />);
    const imgElement = screen.getByAltText("banner");
    expect(imgElement).toBeInTheDocument();
  });

  it("when the poster path is present, then card contain the image", async () => {
    render(<Index movie={{ ...movie, poster_path: "poster_path" }} />);
    const imgElement = screen.getByAltText("img-poster_path");
    expect(imgElement).toBeInTheDocument();
  });
});
