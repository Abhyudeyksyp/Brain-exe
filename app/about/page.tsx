'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="relative min-h-screen">
      {/* Back button */}
      <div className="fixed top-20 left-4 md:left-8 z-40">
        <Link href="/">
          <motion.div
            whileHover={{ x: -4 }}
            className="text-accent-cyan hover:text-accent-cyan/80 transition-colors flex items-center gap-2 text-sm font-mono"
          >
            ← Back
          </motion.div>
        </Link>
      </div>

      <section className="pt-32 md:pt-40 pb-20 md:pb-32 container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-gradient"
          >
            About Brain.exe
          </motion.h1>

          {/* Introduction */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-dark-300 mb-12 leading-relaxed"
          >
            Brain.exe is a premium digital magazine and personal knowledge hub exploring the intersection of technology, Formula 1, artificial intelligence, the future, internet culture, deep thoughts, and random cool discoveries.
          </motion.p>

          {/* Philosophy */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 text-dark-100">
              Philosophy
            </h2>
            <p className="text-dark-300 leading-relaxed mb-4">
              This project exists at the intersection of quality writing, premium design, and genuine curiosity. Rather than chasing algorithms or optimizing for engagement metrics, Brain.exe publishes deep-dive articles that explore topics worth exploring.
            </p>
            <p className="text-dark-300 leading-relaxed">
              The goal is simple: create a space for thoughtful analysis, unexpected connections, and ideas that might not fit neatly into the algorithm-driven social media landscape.
            </p>
          </motion.div>

          {/* Topics */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-dark-100">
              What You'll Find
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: '🏎️',
                  title: 'Formula 1',
                  description: 'Physics, strategy, and drama of motorsport.',
                },
                {
                  icon: '⚙️',
                  title: 'Technology',
                  description: 'Hardware, software, and the innovations shaping our world.',
                },
                {
                  icon: '🤖',
                  title: 'AI',
                  description: 'Artificial intelligence, machine learning, and neural networks.',
                },
                {
                  icon: '🚀',
                  title: 'Future',
                  description: 'Where humanity is heading and how we get there.',
                },
                {
                  icon: '🌐',
                  title: 'Internet Culture',
                  description: 'Memes, platforms, online communities, and digital trends.',
                },
                {
                  icon: '🧠',
                  title: 'Deep Thoughts',
                  description: 'Philosophy, meaning, existence, and consciousness.',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  className="glass-effect rounded-xl p-6"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-dark-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-dark-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 text-dark-100">
              Built With
            </h2>
            
            <div className="glass-effect rounded-xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { name: 'Next.js', desc: 'App Router' },
                  { name: 'TypeScript', desc: 'Type Safety' },
                  { name: 'Tailwind CSS', desc: 'Styling' },
                  { name: 'Framer Motion', desc: 'Animations' },
                  { name: 'GSAP', desc: 'Advanced Effects' },
                  { name: 'Markdown', desc: 'Content' },
                ].map((tech) => (
                  <div key={tech.name}>
                    <div className="font-semibold text-dark-100 mb-1">
                      {tech.name}
                    </div>
                    <div className="text-sm text-dark-400">{tech.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-display font-bold mb-4 text-dark-100">
              Ready to Explore?
            </h2>
            <p className="text-dark-300 mb-6">
              Head back to the home page to browse all articles, use the command menu (⌘K) to search, or explore by category.
            </p>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Back to Home
              </motion.button>
            </Link>
          </motion.div>

          {/* Footer note */}
          <motion.p
            variants={itemVariants}
            className="text-dark-500 text-sm mt-12 text-center font-mono"
          >
            Brain.exe • Built with precision, animated with intention
          </motion.p>
        </motion.div>
      </section>
    </div>
  )
}
