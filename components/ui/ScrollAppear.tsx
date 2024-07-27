import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

const ScrollAppear = ({
  children,
  width = "fit-content",
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`absolute bg-green ${
        width === "fit-content" ? "w-fit" : "w-full"
      } h-96`}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAppear;
