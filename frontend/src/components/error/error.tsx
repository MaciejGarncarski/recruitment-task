import type { LucideIcon } from "lucide-react";
import { X } from "lucide-react";

import styles from "./error.module.scss";

type Props = {
  icon?: LucideIcon;
  errorMessage: string;
};

export const Error = ({ errorMessage, icon: Icon = X }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <Icon strokeWidth={3.5} size={100} className={styles.icon} />
      </div>
      <h2 className={styles.error}>Error</h2>
      <p className={styles.errorDescription}>{errorMessage}</p>
    </div>
  );
};
