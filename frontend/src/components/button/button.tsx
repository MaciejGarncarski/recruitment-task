import clsx from "clsx";
import type { ReactNode } from "react";

import styles from "./button.module.scss";

type Props = {
  text: string;
  type: "submit" | "button" | "reset";
  onClick?: (ev: React.MouseEvent<Element, MouseEvent>) => void;
  icon?: ReactNode;
  iconOnly?: boolean;
  variant: "primary" | "secondary";
};

export const Button = ({
  text,
  type,
  onClick,
  icon,
  iconOnly,
  variant
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        variant === "secondary" && styles.buttonSecondary,
        styles.button
      )}>
      {icon && (
        <span className={iconOnly ? styles.iconOnly : styles.icon}>{icon}</span>
      )}
      <span className={iconOnly ? "visually-hidden" : ""}>{text}</span>
    </button>
  );
};
