import { render, screen } from "@testing-library/react";

import type { DropdownData } from "@/components/dropdown/dropdown";
import { Dropdown } from "@/components/dropdown/dropdown";

const dropdownData = [
  { text: "test", value: "test" },
  { text: "test2", value: "test2" }
] satisfies Array<DropdownData>;

describe("Dropdown component", () => {
  it("should render component", () => {
    render(<Dropdown inputValue="" data={dropdownData} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
