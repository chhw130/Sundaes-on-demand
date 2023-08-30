import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("test checkBox", () => {
  render(<SummaryForm />);

  const checkBox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  expect(checkBox).not.toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkBox);

  expect(checkBox).toBeChecked();
  expect(button).toBeEnabled();
});
