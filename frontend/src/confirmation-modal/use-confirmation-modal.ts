import { useState } from "react";

export const useConfirmationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return { isOpen, close, open };
};
