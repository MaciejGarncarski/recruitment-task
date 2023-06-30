import clsx from "clsx";
import { forwardRef, useId } from "react";
import type { FieldError } from "react-hook-form";

import { InputError } from "@/components/inputError/inputError";

import styles from "./textArea.module.scss";

type Props = {
  label: string;
  error?: FieldError;
  isDirty: boolean;
};

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, isDirty, ...rest }, ref) => {
    const inputId = useId();

    return (
      <div className={styles.container}>
        <div className={styles.textAreaContainer}>
          <textarea
            id={inputId}
            className={styles.textArea}
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
