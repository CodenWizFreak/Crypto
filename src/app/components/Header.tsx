'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const GlowingButton = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link 
        href={href} 
        className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold text-lg relative overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-lg hover:brightness-110"
      >
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  )
}

interface HeaderProps {
  showHomeButton?: boolean;
}

export default function Header({ showHomeButton = false }: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 font-orbitron"
      >
        CryptoQuest
      </motion.div>
      <nav className="flex space-x-4">
        <GlowingButton href="/about">About Us</GlowingButton>
        <GlowingButton href="/testimonials">Testimonials</GlowingButton>
        {showHomeButton ? (
          <GlowingButton href="/">Home</GlowingButton>
        ) : (
          <GlowingButton href="/auth">Sign In</GlowingButton>
        )}
        <GlowingButton href="/privacy">Privacy Policy</GlowingButton>
      </nav>
    </header>
  )
}

