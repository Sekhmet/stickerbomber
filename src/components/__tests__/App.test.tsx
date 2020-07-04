import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders settings pane", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Settings/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders result pane", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Result/i);
    expect(linkElement).toBeInTheDocument();
  });
});
