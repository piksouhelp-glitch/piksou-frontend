"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HoverCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  hoverRotate?: number
}

export default function HoverCard({ children, className = "", hoverScale = 1.03, hoverRotate = 1 }: HoverCardProps) {
  return (
    <motion.div
      className={`${className} cursor-pointer`}
      whileHover={{
        scale: hoverScale,
        rotate: hoverRotate,
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}
