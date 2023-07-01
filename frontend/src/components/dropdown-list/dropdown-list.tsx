import clsx from "clsx";
import { motion } from "framer-motion";
import { forwardRef } from "react";

import type { DropdownData } from "@/components/dropdown/dropdown";
import { variants } from "@/components/dropdown-list/dropdown-list.data";

import styles from "./dropdown-list.module.scss";

type Props = {
  inputValue: string;
  data: Array<DropdownData>;
  onClose: () => void;
};

export const DropdownList = forwardRef<HTMLInputElement, Props>(
  ({ data, inputValue, onClose, ...rest }, ref) => {
    return (
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
                className={clsx(isActive && styles.labelActive, styles.label)}
                onClick={onClose}>
                {text}
              </label>
            </li>
          );
        })}
      </motion.ul>
    );
  }
);
