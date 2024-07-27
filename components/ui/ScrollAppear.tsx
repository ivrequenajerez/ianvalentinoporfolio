import React from 'react'
import { motion } from "framer-motion";

const ScrollAppear = () => {
  return (
    
    <motion.div
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
      initial="hidden"
      animate="visible"
      className="absolute bg-green w-1/2 h-96"
    />
  )
}

export default ScrollAppear