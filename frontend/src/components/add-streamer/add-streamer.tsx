import { AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

import { AddStreamerForm } from "@/components/add-streamer-form/add-streamer-form";
import { Button } from "@/components/button/button";
import { useClickOutside } from "@/hooks/useClickOutside";

import styles from "./add-streamer.module.scss";

export const AddStreamer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => {
    if (isFormOpen) {
      setIsFormOpen(false);
    }
  };

  const { ref } = useClickOutside(closeForm);

  return (
    <main ref={ref} className={styles.addStreamer}>
      <Button
        icon={<Plus />}
        variant="primary"
        text="Add a new streamer"
        type="button"
        onClick={openForm}
      />
      <AnimatePresence mode="wait">
        {isFormOpen && <AddStreamerForm closeForm={closeForm} />}
      </AnimatePresence>
    </main>
  );
};
