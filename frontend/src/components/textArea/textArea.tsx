import clsx from "clsx";
import { forwardRef, useId } from "react";
import type { FieldError } from "react-hook-form";

import { InputError } from "@/components/inputError/inputError";
import { DESCRIPTION_MAX_LENGTH } from "@/schemas/single-streamer";

import styles from "./textArea.module.scss";

type Props = {
  label: string;
  error?: FieldError;
  isDirty: boolean;
  value: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, isDirty, value, ...rest }, ref) => {
    const inputId = useId();

    const length = `${value.length} / ${DESCRIPTION_MAX_LENGTH}`;
    const isLengthValid = value.length >= DESCRIPTION_MAX_LENGTH;

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
        <div className={styles.info}>
          <InputError message={error?.message} />
          {isDirty && (
            <span
              className={clsx(
                isLengthValid && styles.lengthError,
                styles.length
              )}>
              {length}
            </span>
          )}
        </div>
      </div>
    );
  }
);
