import Header from '@/app/components/Header'
import NetworkBackground from '@/app/components/NetworkBackground'
import BlockchainCube from '@/app/components/BlockchainCube'
import CryptoIcon from '@/app/components/CryptoIcon'
import { motion } from 'framer-motion'
import { Cpu, Database, Lock, Wallet, BarChart2, Globe, Shield, Gem, Compass, Coins, Layers } from 'lucide-react'
import Footer from '../components/Footer'

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div
    className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md shadow-xl"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <div className="mr-4 text-4xl text-pink-500">{icon}</div>
      <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
  </motion.div>
)

export default function AboutPage() {
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
      <main className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1 
          className="text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 font-orbitron"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About CryptoQuest
        </motion.h1>
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          CryptoQuest is a revolutionary blockchain gaming platform that combines the thrill of adventure with the power of cryptocurrency. Embark on an epic journey through the digital realm, where every action has real-world value.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <FeatureCard 
            icon={<Gem />}
            title="Collect NFTs"
            description="Discover and acquire unique, blockchain-verified digital assets. Our NFTs represent in-game items, characters, and achievements, each with its own rarity and value. Build your collection, trade with other players, and showcase your digital treasures in the CryptoQuest marketplace."
          />
          <FeatureCard 
            icon={<Compass />}
            title="Solve Quests"
            description="Embark on thrilling adventures and challenging missions designed to test your skills and strategy. Each quest is a unique blockchain transaction, ensuring fairness and transparency. Complete quests to earn rewards, unlock new areas, and progress through the CryptoQuest universe."
          />
          <FeatureCard 
            icon={<Coins />}
            title="Earn Tokens"
            description="Your achievements in CryptoQuest translate to real value. Earn our native cryptocurrency, CryptoQuest Tokens (CQT), by completing quests, winning battles, and contributing to the ecosystem. Use your tokens to purchase in-game items, upgrade your character, or exchange them for other cryptocurrencies."
          />
          <FeatureCard 
            icon={<Layers />}
            title="Explore the Blockchain"
            description="Dive deep into the world of blockchain technology. CryptoQuest offers an intuitive interface to interact with blockchain features. Learn about smart contracts, decentralized finance (DeFi), and the future of digital ownership while playing. Your journey in CryptoQuest is also an educational experience in cutting-edge technology."
          />
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-pink-400">Join the CryptoQuest Revolution</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            CryptoQuest is more than just a game - it's a gateway to the future of digital interaction and value creation. Whether you're a seasoned crypto enthusiast or new to blockchain technology, CryptoQuest offers an exciting and accessible way to engage with this revolutionary tech.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-bold text-xl shadow-lg relative overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-xl hover:brightness-110"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your CryptoQuest
          </motion.button>
        </motion.div>
        <Footer />
      </main>
    </div>
  )
}

