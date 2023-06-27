import { useState } from "react";

import { useClickOutside } from "@/hooks/useClickOutside";

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeDropdown = () => setIsOpen(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const { ref } = useClickOutside(closeDropdown);

  return {
    ref,
    isOpen,
    toggleDropdown,
    closeDropdown
  };
};
