import { motion } from "motion/react";
import type { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  const modalVariants = {
    visible: { opacity: 1, transition: { when: "beforeChildren" } },
    hidden: { opacity: 0, transition: { when: "afterChildren" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={modalVariants}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default Modal;

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  width: "100%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
