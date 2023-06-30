import { AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/button/button";
import { StreamerForm } from "@/components/streamer-form/streamer-form";
import { useClickOutside } from "@/hooks/use-click-outside";

import styles from "./add-streamer.module.scss";

export const AddStreamer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const closeForm = () => {
    setIsFormOpen(false);
    document.body.classList.remove("lock");
  };
  const openForm = () => {
    setIsFormOpen((prev) => !prev);
    if (isFormOpen) {
      document.body.classList.remove("lock");
      return;
    }

    document.body.classList.add("lock");
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
        <div className={styles.overlay}>
          {isFormOpen && <StreamerForm closeForm={closeForm} />}
        </div>
      </AnimatePresence>
    </main>
  );
};
