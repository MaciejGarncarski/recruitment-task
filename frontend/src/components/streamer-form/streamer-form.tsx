import { motion } from "framer-motion";
import { Check, Trash, X } from "lucide-react";

import { Button } from "@/components/button/button";
import { Dropdown } from "@/components/dropdown/dropdown";
import { Input } from "@/components/input/input";
import {
  dropdownData,
  variants
} from "@/components/streamer-form/streamer-form.data";
import { useStreamerForm } from "@/components/streamer-form/use-streamer-form";
import { TextArea } from "@/components/textArea/textArea";
import { useAddNewStreamer } from "@/hooks/use-add-new-streamer";

import styles from "./streamer-form.module.scss";

type Props = {
  closeForm: () => void;
};

export const StreamerForm = ({ closeForm }: Props) => {
  const { errors, register, handleReset, watch, isFieldDirty, handleSubmit } =
    useStreamerForm();

  const { mutate: addNewStreamer } = useAddNewStreamer();
  const onSubmit = handleSubmit((streamerData) => addNewStreamer(streamerData));

  return (
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
            onClick={closeForm}
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
          isDirty={isFieldDirty("description")}
          {...register("description")}
        />
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
            icon={<Check />}
          />
        </div>
      </form>
    </motion.div>
  );
};
