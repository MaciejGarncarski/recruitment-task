import type { Variants } from "framer-motion";

export const variants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  },
  exit: {
    opacity: 0,
    transform: "translate(-50%, -40%) scale(0.5)"
  }
};
