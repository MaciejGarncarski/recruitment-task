import type { Variants } from "framer-motion";

export const listVariants: Variants = {
  hidden: {
    opacity: 0
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const listItemVariants: Variants = {
  hidden: {
    y: -40,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
};
