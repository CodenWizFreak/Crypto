'use client'

import { useState } from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Header from '../components/Header'
import NetworkBackground from '../components/NetworkBackground'
import { motion } from 'framer-motion'
import BlockchainCube from '../components/BlockchainCube'
import CryptoIcon from '../components/CryptoIcon'
import { Cpu, Database, Lock, Wallet, BarChart2, Globe, Shield } from 'lucide-react'
import Footer from '../components/Footer'

export default function AuthPage() {
    const [isSignIn, setIsSignIn] = useState(true)
  
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <NetworkBackground />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <Header showHomeButton={true} />
        <div className="flex-grow flex flex-col items-center justify-center relative z-10">
          {/* Background animations */}
          <div className="absolute inset-0 overflow-hidden">
            <BlockchainCube className="absolute top-1/4 left-1/4 w-32 h-32" />
                    <BlockchainCube className="absolute bottom-1/4 right-1/4 w-32 h-32" />
                    <CryptoIcon icon="bitcoin" className="absolute top-1/4 right-1/3 text-7xl" />
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
                      className="absolute top-1/2 right-10 text-7xl text-white opacity-50"
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Wallet />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-20 left-1/3 text-7xl text-white opacity-50"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <BarChart2 />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-20 right-1/4 text-7xl text-white opacity-50"
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
  
          {/* Auth form */}
          <div className="relative z-10 w-full max-w-md">
            {isSignIn ? (
              <SignIn onToggle={() => setIsSignIn(false)} />
            ) : (
              <SignUp onToggle={() => setIsSignIn(true)} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    )
  }