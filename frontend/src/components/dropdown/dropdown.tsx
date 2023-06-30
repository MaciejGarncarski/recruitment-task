import clsx from "clsx";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ChevronsUpDown } from "lucide-react";
import { forwardRef } from "react";
import type { FieldError } from "react-hook-form";

import { useDropdown } from "@/components/dropdown/use-dropdown";
import { InputError } from "@/components/inputError/inputError";

import styles from "./dropdown.module.scss";

const variants: Variants = {
  hidden: {
    opacity: 0,
    top: -10
  },
  visible: {
    opacity: 1,
    top: "4rem"
  }
};

type DropdownData = {
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

    const selectedText = data.find(({ value }) => value === inputValue);

    return (
      <div className={styles.container} ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          type="button"
          className={styles.mainButton}>
          {inputValue ? selectedText?.text : "Choose platform"}
          <ChevronsUpDown />
        </button>

        {isOpen && (
          <motion.ul
            variants={variants}
            animate="visible"
            initial="hidden"
            className={styles.list}>
            {data.map(({ text, value }) => {
              const isActive = inputValue === value;

              return (
                <li key={value} className={styles.listItem}>
                  <input
                    className={styles.input}
                    type="radio"
                    id={value}
                    {...rest}
                    value={value}
                    ref={ref}
                  />
                  <label
                    htmlFor={value}
                    className={clsx(
                      isActive && styles.labelActive,
                      styles.label
                    )}
                    onClick={() => setTimeout(closeDropdown)}>
                    {text}
                  </label>
                </li>
              );
            })}
          </motion.ul>
        )}
        <InputError message={error?.message} />
      </div>
    );
  }
);
// onClick={() => {
//   setTimeout(closeDropdown);
//   setValue("platform", { text, value });
// }}>
