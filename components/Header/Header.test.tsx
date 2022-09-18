import Index from "@/components/Header/Header";
import { render, screen } from "@testing-library/react";
describe("Header", () => {
  it("renders a component", () => {
    render(<Index />);
    expect(screen.getByPlaceholderText("Search here")).toBeInTheDocument();
    expect(screen.getByAltText("profile picture")).toBeInTheDocument();
  });
});
