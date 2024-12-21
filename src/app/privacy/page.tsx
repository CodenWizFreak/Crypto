'use client'

import Header from '../components/Header'
import NetworkBackground from '../components/NetworkBackground'
import BlockchainCube from '../components/BlockchainCube'
import CryptoIcon from '../components/CryptoIcon'
import { motion } from 'framer-motion'
import { Cpu, Database, Lock, Wallet, BarChart2, Globe, Shield } from 'lucide-react'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <NetworkBackground />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Background elements */}
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
      </div>

      <Header showHomeButton={true} />
      <main className="flex-grow relative z-10 container mx-auto px-4 py-16">
        <motion.h1 
          className="text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 font-orbitron"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
        </motion.h1>
        <motion.div 
          className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-md shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">1. Introduction</h2>
            <p className="text-gray-300">
              Welcome to CryptoQuest's Privacy Policy. At CryptoQuest, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our blockchain gaming platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">2. Information We Collect</h2>
            <p className="text-gray-300">
              We collect personal information that you provide to us, such as your name, email address, and wallet address. We also automatically collect certain information when you use our platform, including your IP address, device information, and usage data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">3. How We Use Your Information</h2>
            <p className="text-gray-300">
              We use your information to provide and improve our services, process transactions, communicate with you, and ensure the security of our platform. We may also use your data for analytics and marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">4. Blockchain Data</h2>
            <p className="text-gray-300">
              Please note that transactions on the blockchain are public. While we do not directly link blockchain transactions to your personal information, your public wallet address and transaction history are visible on the blockchain.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">5. Data Security</h2>
            <p className="text-gray-300">
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">6. Your Rights</h2>
            <p className="text-gray-300">
              Depending on your location, you may have certain rights regarding your personal data, such as the right to access, correct, or delete your data. Please contact us if you wish to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-400">7. Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </motion.div>

        <motion.p 
          className="mt-8 text-center text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Last updated: {new Date().toLocaleDateString()}
        </motion.p>
      </main>
      <Footer />
    </div>
  )
}
