import { Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/button/button";
import { StreamerForm } from "@/components/streamer-form/streamer-form";

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

  return (
    <main className={styles.addStreamer}>
      <Button
        icon={<Plus />}
        variant="primary"
        text="Add a new streamer"
        type="button"
        onClick={openForm}
      />
      <StreamerForm closeForm={closeForm} isOpen={isFormOpen} />
    </main>
  );
};
