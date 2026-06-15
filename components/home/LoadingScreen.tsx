'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-dark-950 z-[9999] flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="text-center">
            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-display font-black mb-6 text-gradient"
            >
              Brain.exe
            </motion.h1>

            {/* Loading bar */}
            <motion.div
              variants={itemVariants}
              className="w-64 h-1 bg-dark-800 rounded-full overflow-hidden mb-8"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-blue"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Status text */}
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
              <p className="text-dark-300 font-mono text-sm uppercase tracking-wider">
                Initializing thoughts...
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
