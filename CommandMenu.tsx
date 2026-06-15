'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getAllArticles } from '../../mdx'
import Link from 'next/link'

const CommandMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [articles, setArticles] = useState<any[]>([])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(!isOpen)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (isOpen && articles.length === 0) {
      setArticles(getAllArticles())
    }
  }, [isOpen, articles.length])

  const filtered = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.description.toLowerCase().includes(search.toLowerCase()) ||
      article.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Command Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50"
          >
            <div className="glass-effect rounded-2xl shadow-2xl shadow-dark-950 overflow-hidden">
              {/* Search input */}
              <div className="border-b border-dark-700 p-4 md:p-6">
                <input
                  type="text"
                  autoFocus
                  placeholder="Search articles by title, topic, or category..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-dark-100 placeholder-dark-500 outline-none text-lg"
                />
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto no-scrollbar">
                {filtered.length > 0 ? (
                  <div className="divide-y divide-dark-700">
                    {filtered.slice(0, 10).map((article) => (
                      <Link
                        key={article.slug}
                        href={`/articles/${article.slug}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="p-4 md:p-5 hover:bg-dark-800/50 cursor-pointer transition-colors duration-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-dark-100 font-semibold text-base mb-1">
                                {article.title}
                              </h4>
                              <p className="text-dark-400 text-sm mb-2 line-clamp-1">
                                {article.description}
                              </p>
                              <div className="flex gap-3">
                                <span className="inline-block px-2 py-1 rounded text-xs bg-dark-800 text-dark-400 font-mono">
                                  {article.category}
                                </span>
                                <span className="text-xs text-dark-500 font-mono">
                                  {article.readingTime} min read
                                </span>
                              </div>
                            </div>
                            <span className="text-accent-cyan text-xl ml-4">→</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-dark-400">No articles found for "{search}"</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-dark-700 bg-dark-800/30 px-4 py-3 text-xs text-dark-500 flex items-center justify-between">
                <span>
                  {filtered.length} of {articles.length} articles
                </span>
                <span>ESC to close</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CommandMenu
