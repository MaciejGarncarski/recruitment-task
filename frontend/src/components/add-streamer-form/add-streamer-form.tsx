import { motion } from "framer-motion";
import { Check, Trash, X } from "lucide-react";

import {
  dropdownData,
  variants
} from "@/components/add-streamer-form/add-streamer-form.data";
import { useStreamerForm } from "@/components/add-streamer-form/useStreamerForm";
import { Button } from "@/components/button/button";
import { Dropdown } from "@/components/dropdown/dropdown";
import { Input } from "@/components/input/input";
import { TextArea } from "@/components/textArea/textArea";

import styles from "./add-streamer-form.module.scss";

type Props = {
  closeForm: () => void;
};

export const AddStreamerForm = ({ closeForm }: Props) => {
  const {
    dirtyFields,
    errors,
    register,
    resetField,
    setValue,
    watch,
    handleSubmit
  } = useStreamerForm();

  const resetPlatform = () => resetField("platform");

  const onSubmit = handleSubmit(({ description, name, platform }) => {
    console.log(platform, name, description);
  });

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      exit="exit"
      animate="visible"
      className={styles.container}>
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
      <h2 className={styles.heading}>Add a new streamer</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          type="text"
          label="Streamer's name"
          {...register("name")}
          error={errors.name}
          isDirty={dirtyFields.name}
        />
        <Dropdown
          {...register("platform")}
          data={dropdownData}
          setValue={setValue}
          inputValue={watch().platform}
          error={errors.platform?.value}
        />
        <TextArea
          label="Streamer's description"
          {...register("description")}
          error={errors.description}
          isDirty={dirtyFields.description}
        />
        <div className={styles.buttons}>
          <Button
            variant="secondary"
            text="Reset"
            type="reset"
            onClick={resetPlatform}
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
