'use client'

import { motion } from 'framer-motion'
import { Bitcoin, EclipseIcon as Ethereum } from 'lucide-react'

const icons = {
  bitcoin: Bitcoin,
  ethereum: Ethereum,
}

export default function CryptoIcon({ icon, className }: { icon: keyof typeof icons; className?: string }) {
  const Icon = icons[icon]

  return (
    <motion.div
      className={`text-5xl ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-full shadow-lg">
        <Icon className="text-white" />
      </div>
    </motion.div>
  )
}

