"use client"

import { motion, Variants } from "framer-motion"

interface AnimatedDivProps {
  children: React.ReactNode
  initial?: any
  animate?: any
  transition?: any
  className?: string
}

export function AnimatedDiv({ children, initial, animate, transition, className }: AnimatedDivProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  )
}