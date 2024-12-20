'use client'

import { motion } from 'framer-motion'

export default function BlockchainCube({ className }: { className?: string }) {
  return (
    <motion.div
      className={`w-24 h-24 ${className}`}
      animate={{
        rotateY: [0, 360],
        rotateX: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-70 rounded-lg shadow-lg relative">
        <div className="absolute inset-0 bg-white opacity-20 rounded-lg"></div>
        <div className="absolute inset-2 border-2 border-white opacity-40 rounded-lg"></div>
      </div>
    </motion.div>
  )
}

