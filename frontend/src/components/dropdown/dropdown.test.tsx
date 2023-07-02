import { fireEvent, render, screen } from "@testing-library/react";

import type { DropdownData } from "@/components/dropdown/dropdown";
import { Dropdown } from "@/components/dropdown/dropdown";

const dropdownData = [
  { text: "test", value: "test" },
  { text: "test2", value: "test2" }
] satisfies Array<DropdownData>;

describe("Dropdown component", () => {
  it("should open on click and find input with passed data", () => {
    render(<Dropdown inputValue="" data={dropdownData} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByLabelText("test")).toBeInTheDocument();
  });
});
