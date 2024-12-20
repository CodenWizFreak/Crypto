import Header from '@/app/components/Header'
import TestimonialSlider from '@/app/components/TestimonialSlider'
import NetworkBackground from '@/app/components/NetworkBackground'
import BlockchainCube from '@/app/components/BlockchainCube'
import CryptoIcon from '@/app/components/CryptoIcon'
import { motion } from 'framer-motion'
import { Cpu, Database, Lock, Wallet, BarChart2, Globe, Shield } from 'lucide-react'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <NetworkBackground />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
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
      </div>

      <Header showHomeButton={true} />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12">
        <motion.h1 
          className="text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 font-orbitron"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Voices of CryptoQuest
        </motion.h1>
        <motion.p 
          className="text-xl mb-12 text-center max-w-2xl text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover what our community has to say about their epic blockchain gaming adventures!
        </motion.p>
        <TestimonialSlider />
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-pink-400">Join the CryptoQuest Revolution</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience the future of gaming where your achievements have real-world value. 
            Dive into a world where strategy meets blockchain technology, and every quest 
            brings you closer to digital fortune.
          </p>
          <Link href="/auth">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-bold text-xl shadow-lg relative overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-xl hover:brightness-110"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Adventure
            </motion.button>
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

