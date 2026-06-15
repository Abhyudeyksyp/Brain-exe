'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
{
name:'Articles',
href:'/articles'},
{
name:'Categories',
href:'/categories'},
{
name:'About',
href:'/about'
}
]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container-max flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-display font-bold text-gradient cursor-pointer"
          >
            Brain.exe
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ color: '#06b6d4' }}
              className="text-dark-300 hover:text-accent-cyan transition-colors duration-300 text-sm font-medium"
            >
              {item.name}
            </motion.a>
          ))}

          {/* Search and Menu */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
           onClick={() => {
window.location.href='/search'
}}
            className="btn-secondary text-sm flex items-center gap-2"
          >
            <span>⌘K</span>
            <span>Search</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden w-10 h-10 flex items-center justify-center"
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-dark-300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </motion.button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -10 }}
          transition={{ duration: 0.2 }}
          className={`absolute top-full left-0 right-0 mt-2 glass-effect rounded-2xl p-4 md:hidden ${
            !isMenuOpen && 'pointer-events-none'
          }`}
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <div
                className="px-4 py-3 text-dark-300 hover:text-accent-cyan transition-colors text-sm font-medium cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
