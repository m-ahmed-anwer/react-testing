import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";
import userEvent from "@testing-library/user-event";

describe("Counter component", () => {
  it("check initial count", () => {
    render(<Counter initialCount={0} />);
    const countValue = screen.getByTestId("count-value");
    expect(countValue).toHaveTextContent("0");
  });

  test("check increment", () => {
    render(<Counter initialCount={0} />);
    const incrementButton = screen.getByText("Increment");
    const countValue1 = screen.getByTestId("count-value");
    expect(countValue1).toHaveTextContent("0");
    fireEvent.click(incrementButton);
    expect(screen.getByTestId("count-value")).toHaveTextContent("1");
  });

  test("check decrement", () => {
    render(<Counter initialCount={10} />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    expect(screen.getByTestId("count-value")).toHaveTextContent("9");
  });

  test("check reset", () => {
    render(<Counter initialCount={10} />);
    const resetButton = screen.getByText("Decrement");
    fireEvent.click(resetButton);
    expect(screen.getByTestId("count-value")).toHaveTextContent("1");
  });
});
