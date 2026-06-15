'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Article } from '../../types'
import { formatDate } from '../../utils'

interface ArticleGridProps {
  articles: Article[]
}

const ArticleGrid = ({ articles }: ArticleGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {articles.map((article) => (
        <motion.article
          key={article.slug}
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className="group relative"
        >
          <Link href={`/articles/${article.slug}`}>
            <div className="glass-effect rounded-xl p-6 h-full cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-cyan/10">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Category badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold mb-3 text-dark-100 group-hover:text-accent-cyan transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-dark-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-dark-700/50">
                  <span className="text-xs text-dark-500 font-mono">
                    {formatDate(article.date)}
                  </span>
                  <span className="text-xs text-dark-500 font-mono">
                    {article.readingTime}m
                  </span>
                </div>
              </div>

              {/* Hover border animation */}
              <motion.div
                className="absolute inset-0 rounded-xl border border-accent-cyan/0 pointer-events-none"
                whileHover={{
                  borderColor: 'rgba(6, 182, 212, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  )
}

export default ArticleGrid
