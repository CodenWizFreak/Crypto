'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import BlockchainCube from './BlockchainCube'
import CryptoIcon from './CryptoIcon'
import { Cpu, Database, Lock, Wallet, BarChart2, Globe, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <BlockchainCube className="absolute top-1/6 left-1/4 w-32 h-32" />
        <BlockchainCube className="absolute bottom-1/4 right-1/4 w-32 h-32" />
        <CryptoIcon icon="bitcoin" className="absolute top-1/5 right-1/3 text-7xl" />
        <CryptoIcon icon="ethereum" className="absolute bottom-1/3 left-1/3 text-7xl" />
        
        <motion.div
          className="absolute top-20 right-20 text-8xl text-white opacity-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Cpu />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-8xl text-white opacity-50"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Database />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-10 text-8xl text-white opacity-50"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Lock />
        </motion.div>
        <motion.div
          className="absolute top-1/4 right-10 text-7xl text-white opacity-50"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Wallet />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/3 text-7xl text-white opacity-50"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <BarChart2 />
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-1/4 text-7xl text-white opacity-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Globe />
        </motion.div>
        <motion.div
          className="absolute top-10 left-1/3 text-7xl text-white opacity-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Shield />
        </motion.div>

        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-8xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 font-orbitron"
        >
          Welcome to CryptoQuest
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl mb-16 text-center max-w-4xl text-gray-300 font-inter"
        >
          Embark on an epic blockchain gaming adventure!
        </motion.p>
        <Link href="/auth">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-bold text-4xl shadow-lg relative overflow-hidden group font-orbitron transition-all duration-300 ease-in-out hover:shadow-xl hover:brightness-110"
          >
            <span className="relative z-10">Get Started</span>
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

