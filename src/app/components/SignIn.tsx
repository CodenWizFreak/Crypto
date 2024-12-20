import { motion } from 'framer-motion'
import Link from 'next/link'

interface SignInProps {
  onToggle: () => void
}

export default function SignIn({ onToggle }: SignInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-md shadow-xl"
    >
      <h2 className="text-4xl font-bold mb-6 text-center font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Sign In</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-200">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white placeholder-gray-400"
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-200">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white placeholder-gray-400"
            required
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-md font-semibold text-white hover:brightness-110 transition duration-300 transform hover:scale-105"
        >
          Sign In
        </button>
      </form>
      <p className="mt-4 text-center text-gray-300">
        Don't have an account?{' '}
        <button onClick={onToggle} className="text-purple-400 hover:underline font-semibold">
          Sign Up
        </button>
      </p>
    </motion.div>
  )
}

