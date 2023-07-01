import { ChevronsUpDown } from "lucide-react";
import { forwardRef } from "react";
import type { FieldError } from "react-hook-form";

import { useDropdown } from "@/components/dropdown/use-dropdown";
import { DropdownList } from "@/components/dropdown-list/dropdown-list";
import { InputError } from "@/components/inputError/inputError";

import styles from "./dropdown.module.scss";

export type DropdownData = {
  text: string;
  value: string;
};

type Props = {
  error?: FieldError;
  inputValue: string;
  data: Array<DropdownData>;
};

export const Dropdown = forwardRef<HTMLInputElement, Props>(
  ({ inputValue, error, data, ...rest }, ref) => {
    const {
      ref: dropdownRef,
      isOpen,
      toggleDropdown,
      closeDropdown
    } = useDropdown();

    const selectedText = data.find(({ value }) => value === inputValue)?.text;

    return (
      <div className={styles.container} ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          type="button"
          className={styles.mainButton}>
          {inputValue ? selectedText : "Choose platform"}
          <ChevronsUpDown />
        </button>
        {isOpen && (
          <DropdownList
            inputValue={inputValue}
            onClose={() => setTimeout(closeDropdown)}
            data={data}
            {...rest}
            ref={ref}
          />
        )}
        <InputError message={error?.message} />
      </div>
    );
  }
);
