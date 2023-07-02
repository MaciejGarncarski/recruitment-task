import type { MouseEvent } from "react";

import { useConfirmationModal } from "@/confirmation-modal/use-confirmation-modal";

export const useOverlay = () => {
  const { close, isOpen: isConfirmationOpen, open } = useConfirmationModal();

  const onOvelayClick = (mouseEv: MouseEvent<HTMLDivElement>) => {
    if (mouseEv.target === mouseEv.currentTarget) {
      open();
    }
  };

  return { onOvelayClick, isConfirmationOpen, close, open };
};
