import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Check, X } from "lucide-react";

import { Button } from "@/components/button/button";
import { ModalOverlay } from "@/components/modal-overlay/modal-overlay";
import { variants } from "@/confirmation-modal/confirmation-modal.data";

import styles from "./confirmation-modal.module.scss";

type Props = {
  isOpen: boolean;
  close: () => void;
  onConfirm: () => void;
  headingText: string;
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
