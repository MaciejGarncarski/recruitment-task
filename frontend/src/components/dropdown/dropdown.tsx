import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ChevronsUpDown } from "lucide-react";
import { forwardRef } from "react";
import type { FieldError, UseFormSetValue } from "react-hook-form";

import type { FormValues } from "@/components/add-streamer-form/useStreamerForm";
import { useDropdown } from "@/components/dropdown/useDropdown";
import { InputError } from "@/components/inputError/inputError";

import styles from "./dropdown.module.scss";

const variants: Variants = {
  hidden: {
    opacity: 0,
    top: -10
  },
  visible: {
    opacity: 1,
    top: 0
  }
};

type Platform = {
  text: string;
  value: string;
};

type Props = {
  setValue: UseFormSetValue<FormValues>;
  error?: FieldError;
  inputValue: Platform;
  data: Array<Platform>;
};

export const Dropdown = forwardRef<HTMLInputElement, Props>(
  ({ setValue, inputValue, error, data, ...rest }, ref) => {
    const {
      ref: dropdownRef,
      isOpen,
      toggleDropdown,
      closeDropdown
    } = useDropdown();

    return (
      <div className={styles.container} ref={dropdownRef}>
        <input
          type="text"
          className="visually-hidden"
          aria-hidden="true"
          tabIndex={-1}
          {...rest}
          ref={ref}
        />
        <button
          onClick={toggleDropdown}
          type="button"
          className={styles.mainButton}>
          {inputValue.value ? inputValue.text : "Choose platform"}
          <ChevronsUpDown />
        </button>

        {isOpen && (
          <motion.ul
            variants={variants}
            animate="visible"
            initial="hidden"
            className={styles.list}>
            {data.map(({ text, value }) => {
              return (
                <li key={value} className={styles.listItem}>
                  <button
                    type="button"
                    className={styles.listItemButton}
                    onClick={() => {
                      setTimeout(closeDropdown);
                      setValue("platform", { text, value });
                    }}>
                    {text}
                  </button>
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
