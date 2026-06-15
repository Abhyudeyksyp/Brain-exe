'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

const CATEGORIES = [
  { name: 'All', icon: '★' },
  { name: 'Formula 1', icon: '🏎️' },
  { name: 'Technology', icon: '⚙️' },
  { name: 'AI', icon: '🤖' },
  { name: 'Future', icon: '🚀' },
  { name: 'Internet Culture', icon: '🌐' },
  { name: 'Deep Thoughts' },
  { name: 'Random', icon: '✨' },
]

const CategorySelector = () => {
  const [selected, setSelected] = useState('All')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
        {CATEGORIES.map((category) => (
          <Link href={`/categories/${category.name}`}>

      
          <motion.button
            key={category.name}
            onClick={() => setSelected(category.name)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
              selected === category.name
                ? 'bg-accent-cyan text-dark-950 shadow-lg shadow-accent-cyan/30'
                : 'bg-dark-800 text-dark-300 hover:text-dark-100 border border-dark-700 hover:border-accent-cyan/50'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            <span>{category.name}</span>

            {selected === category.name && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 rounded-full bg-accent-cyan -z-10"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default CategorySelector
