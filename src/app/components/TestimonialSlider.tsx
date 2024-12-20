'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Testimonial from './Testimonial';

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Crypto Enthusiast",
    content: "CryptoQuest has revolutionized the way I engage with blockchain gaming. The immersive experience and rewards are unparalleled!",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Bob Smith",
    role: "NFT Collector",
    content: "As an avid NFT collector, I've found CryptoQuest to be the perfect platform to showcase and utilize my digital assets. It's a game-changer!",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Carol White",
    role: "Blockchain Developer",
    content: "The integration of blockchain technology in CryptoQuest is seamless. It's exciting to see my work come to life in such an engaging way.",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "David Brown",
    role: "Professional Gamer",
    content: "CryptoQuest offers a unique blend of traditional gaming and blockchain rewards. It's addictive, challenging, and financially rewarding!",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Eva Green",
    role: "Cryptocurrency Analyst",
    content: "The economic model in CryptoQuest is fascinating. It's not just a game, but a glimpse into the future of digital economies.",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Frank Lee",
    role: "E-sports Organizer",
    content: "CryptoQuest has opened up new possibilities for competitive gaming. The blockchain integration adds a whole new layer of strategy and excitement.",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Grace Chen",
    role: "Digital Artist",
    content: "As a creator, I love how CryptoQuest values digital art. The NFT integration allows artists like me to contribute to the game world in meaningful ways.",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Henry Wilson",
    role: "Fintech Entrepreneur",
    content: "CryptoQuest is more than a game; it's a proof of concept for blockchain applications. It's inspiring to see how it bridges entertainment and finance.",
    avatar: "/placeholder.svg?height=100&width=100"
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Testimonial {...testimonials[currentIndex]} />
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
              index === currentIndex ? 'bg-pink-500 w-6' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;

