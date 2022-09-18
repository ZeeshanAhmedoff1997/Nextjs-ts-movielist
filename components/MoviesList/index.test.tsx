import Index from "@/components/MoviesList";
import { render, screen } from "@testing-library/react";
import * as redux from "react-redux";
import { movies } from "constant/data";

const spy = jest.spyOn(redux, "useSelector");
spy.mockReturnValue({
  movies: {
    movies: movies,
  },
});

describe("Home", () => {
  it("renders a components with cards", () => {
    const { container, getByText } = render(<Index />);
    screen.debug();
    expect(container?.firstChild).toHaveClass("grid");
    expect(container?.firstChild).toHaveClass("grid grid-cols-2");
    expect(getByText("Best Movie")).toBeInTheDocument();
    expect(getByText("Harry Potter")).toBeInTheDocument();
  });
});
