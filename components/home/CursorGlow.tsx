'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="fixed pointer-events-none z-40 mix-blend-screen"
      animate={{
        x: mousePosition.x - 20,
        y: mousePosition.y - 20,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: 'tween',
        ease: 'easeOut',
        duration: 0.1,
      }}
    >
      {/* Outer glow */}
      <div className="w-10 h-10 rounded-full border border-accent-cyan/30 shadow-lg shadow-accent-cyan/20" />

      {/* Inner dot */}
      <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-accent-cyan -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  )
}

export default CursorGlow
