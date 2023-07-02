import { AnimatePresence, motion } from "framer-motion";
import { Check, Trash, X } from "lucide-react";

import { Button } from "@/components/button/button";
import { Dropdown } from "@/components/dropdown/dropdown";
import { Input } from "@/components/input/input";
import { ModalOverlay } from "@/components/modal-overlay/modal-overlay";
import {
  dropdownData,
  variants
} from "@/components/streamer-form/streamer-form.data";
import { StreamerFormErrors } from "@/components/streamer-form/streamer-form-errors";
import { useOverlay } from "@/components/streamer-form/use-overlay";
import { useStreamerForm } from "@/components/streamer-form/use-streamer-form";
import { TextArea } from "@/components/textArea/textArea";
import { ConfirmationModal } from "@/confirmation-modal/confirmation-modal";

import styles from "./streamer-form.module.scss";

type Props = {
  closeForm: () => void;
  isOpen: boolean;
};

export const StreamerForm = ({ closeForm, isOpen }: Props) => {
  const {
    errors,
    isDirty,
    register,
    handleReset,
    watch,
    isFieldDirty,
    onSubmit,
    addNewStreamerError
  } = useStreamerForm({ closeForm });

  const { close, isConfirmationOpen, onOvelayClick, open } = useOverlay();

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen && (
          <ModalOverlay onClick={onOvelayClick}>
            <motion.div
              variants={variants}
              initial="hidden"
              exit="exit"
              animate="visible"
              className={styles.container}>
              <div className={styles.header}>
                <h2 className={styles.heading}>Add a new streamer</h2>
                <div className={styles.closeButton}>
                  <Button
                    variant="primary"
                    text="close form"
                    type="button"
                    icon={<X />}
                    iconOnly
                    onClick={open}
                  />
                </div>
              </div>
              <form onSubmit={onSubmit} className={styles.form}>
                <Input
                  type="text"
                  label="Streamer's name"
                  error={errors.name}
                  isDirty={isFieldDirty("name")}
                  {...register("name")}
                />
                <Dropdown
                  data={dropdownData}
                  inputValue={watch().platform}
                  error={errors.platform}
                  {...register("platform")}
                />
                <TextArea
                  label="Streamer's description"
                  error={errors.description}
                  value={watch().description}
                  isDirty={isFieldDirty("description")}
                  {...register("description")}
                />
                <StreamerFormErrors error={addNewStreamerError} />
                <div className={styles.buttons}>
                  <Button
                    variant="secondary"
                    text="Reset"
                    onClick={handleReset}
                    type="reset"
                    icon={<Trash />}
                  />
                  <Button
                    variant="primary"
                    text="Submit"
                    type="submit"
                    disabled={!isDirty}
                    icon={<Check />}
                  />
                </div>
              </form>
            </motion.div>
          </ModalOverlay>
        )}
      </AnimatePresence>
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        headingText="Close form?"
        close={close}
        onConfirm={closeForm}
      />
    </>
  );
};
