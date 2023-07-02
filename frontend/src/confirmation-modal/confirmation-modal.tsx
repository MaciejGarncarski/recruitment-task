import type { Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Check, X } from "lucide-react";

import { Button } from "@/components/button/button";
import { ModalOverlay } from "@/components/modal-overlay/modal-overlay";

import styles from "./confirmation-modal.module.scss";

type Props = {
  isOpen: boolean;
  close: () => void;
  onConfirm: () => void;
  headingText: string;
};

const variants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  },
  exit: {
    opacity: 0,
    transform: "translate(-50%, -40%) scale(0.5)"
  }
};

export const ConfirmationModal = ({
  headingText,
  isOpen,
  close,
  onConfirm
}: Props) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <ModalOverlay onClick={close}>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={styles.modal}>
            <div className={styles.icon}>
              <AlertCircle />
            </div>
            <h2 className={styles.heading}>{headingText}</h2>
            <div className={styles.buttons}>
              <Button
                variant="secondary"
                type="button"
                text="Cancel"
                icon={<X />}
                onClick={close}
              />
              <Button
                variant="primary"
                type="button"
                text="Confirm"
                icon={<Check />}
                onClick={onConfirm}
              />
            </div>
          </motion.div>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};
