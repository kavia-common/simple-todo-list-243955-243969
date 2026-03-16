import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders todo app title", () => {
  render(<App />);
  expect(screen.getByText(/retro todo/i)).toBeInTheDocument();
});

test("prevents adding empty todos and shows inline validation error", () => {
  render(<App />);

  const input = screen.getByLabelText(/todo text/i);
  const addButton = screen.getByRole("button", { name: /add todo/i });

  fireEvent.change(input, { target: { value: "   " } });
  fireEvent.click(addButton);

  expect(screen.getByRole("alert")).toHaveTextContent(/please enter a todo/i);
  expect(screen.getByText(/no todos yet\. add one above\./i)).toBeInTheDocument();
});
