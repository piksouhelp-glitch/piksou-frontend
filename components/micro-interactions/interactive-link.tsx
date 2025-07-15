"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { ReactNode } from "react"

interface InteractiveLinkProps {
  children: ReactNode
  href: string
  className?: string
  underlineColor?: string
}

export default function InteractiveLink({
  children,
  href,
  className = "",
  underlineColor = "#48C774",
}: InteractiveLinkProps) {
  return (
    <Link href={href} className={`relative inline-block ${className}`}>
      <motion.span
        className="relative z-10"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.span>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-current"
        style={{ backgroundColor: underlineColor }}
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </Link>
  )
}
