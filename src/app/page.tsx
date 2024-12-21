'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import NetworkBackground from './components/NetworkBackground'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <NetworkBackground />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <Header />
      <div className="flex-grow">
        <Hero />
      </div>
      <Footer />
    </main>
  )
}
