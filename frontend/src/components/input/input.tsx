import clsx from "clsx";
import { forwardRef, type HTMLInputTypeAttribute, useId } from "react";
import type { FieldError } from "react-hook-form";

import { InputError } from "@/components/inputError/inputError";

import styles from "./input.module.scss";

type Props = {
  type: HTMLInputTypeAttribute;
  label: string;
  error?: FieldError;
  isDirty: boolean;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ type, label, error, isDirty, ...rest }, ref) => {
    const inputId = useId();

    return (
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input
            id={inputId}
            type={type}
            className={styles.input}
            ref={ref}
            {...rest}
          />
          <label
            htmlFor={inputId}
            className={clsx(isDirty && styles.labelActive, styles.label)}>
            {label}
          </label>
        </div>
        <InputError message={error?.message} />
      </div>
    );
  }
);
