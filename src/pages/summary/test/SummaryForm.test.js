import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("test checkBox", async () => {
  render(<SummaryForm />);

  const user = userEvent.setup();

  const checkBox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  expect(checkBox).not.toBeChecked();
  expect(button).toBeDisabled();

  //   user.click(checkBox);
  await user.click(checkBox);

  expect(checkBox).toBeChecked();
  expect(button).toBeEnabled();
});

test("set popOver", async () => {
  render(<SummaryForm />);

  const user = userEvent.setup();
});
