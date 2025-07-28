import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  it("should render the heading element", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { name: /hello, there/i });

    expect(heading).toBeInTheDocument();
  });
});
