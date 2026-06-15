'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import CursorGlow from './CursorGlow'
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

  const glitchVariants = {
    animate: {
      textShadow: [
        '0 0 10px rgba(6, 182, 212, 0.5)',
        '2px 2px 0 rgba(147, 51, 234, 0.3), -2px -2px 0 rgba(51, 131, 244, 0.3)',
        '0 0 10px rgba(6, 182, 212, 0.5)',
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatDelay: 5,
      },
    },
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-dark-950">
      <CursorGlow />

      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)`,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center container-max"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Loading text */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-accent-cyan text-sm md:text-base font-mono tracking-widest uppercase">
            Initializing...
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-display font-black mb-6 relative"
        >
          <motion.span
            className="inline-block"
            variants={glitchVariants}
            animate="animate"
          >
            Brain.exe
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-dark-300 mb-8 max-w-3xl mx-auto font-light tracking-wide"
        >
          A premium digital magazine exploring{' '}
          <span className="text-gradient font-semibold">
            Formula 1, Technology, AI, and the Future
          </span>
          {' '}through deep dives and random cool discoveries.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link href="/articles">

<button className="btn-primary group relative overflow-hidden">

<span className="relative z-10">
Explore Articles
</span>

<motion.div
className="absolute inset-0 bg-accent-cyan/20"
initial={{ x: '-100%' }}
whileHover={{ x: '100%' }}
transition={{ duration: 0.5 }}
/>

</button>

</Link>

          <Link href="/search">

<button className="btn-secondary group relative overflow-hidden">

<span className="relative z-10">
Latest Thoughts
</span>

<motion.div
className="absolute inset-0 bg-dark-700/50"
initial={{ x: '-100%' }}
whileHover={{ x: '100%' }}
transition={{ duration: 0.5 }}
/>

</button>

</Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8 md:gap-16 text-center mt-16 pt-8 border-t border-dark-800"
        >
          {[
            { label: 'Articles', value: '50+' },
            { label: 'Topics', value: '6' },
            { label: 'Readers', value: 'Growing' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-accent-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-dark-400 group-hover:text-dark-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accent-cyan rounded-full flex items-center justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-accent-cyan rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default HeroSection
