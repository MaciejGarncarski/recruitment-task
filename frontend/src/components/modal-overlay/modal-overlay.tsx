import type { MouseEventHandler, ReactNode } from "react";

import styles from "./modal-overlay.module.scss";

type Props = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
};

export const ModalOverlay = ({ children, onClick }: Props) => {
  return (
    <div className={styles.overlay} onClick={onClick}>
      {children}
    </div>
  );
};
