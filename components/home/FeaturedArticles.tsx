'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Article } from '../../types'
import { formatDate } from '../../utils'

interface FeaturedArticlesProps {
  articles: Article[]
}

const FeaturedArticles = ({ articles }: FeaturedArticlesProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
    >
      {articles.map((article, index) => (
        <motion.div
          key={article.slug}
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="group h-full"
        >
          <Link href={`/articles/${article.slug}`}>
            <div className="glass-effect rounded-2xl p-6 md:p-8 h-full flex flex-col cursor-pointer relative overflow-hidden">
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-purple/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Badge */}
                <div className="mb-6">
                  <span className="badge-accent">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-dark-100 group-hover:text-accent-cyan transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-dark-300 text-base leading-relaxed mb-6 flex-grow line-clamp-2">
                  {article.description}
                </p>

                {/* Meta info */}
                <div className="flex items-center justify-between pt-6 border-t border-dark-700/50">
                  <span className="text-sm text-dark-400 font-mono">
                    {formatDate(article.date)}
                  </span>
                  <span className="text-sm text-dark-400 font-mono">
                    {article.readingTime} min
                  </span>
                </div>

                {/* Arrow */}
                <motion.div
                  className="mt-4 text-accent-cyan text-lg"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.div>
              </div>

              {/* Border animation */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-accent-cyan/0 pointer-events-none"
                whileHover={{
                  borderColor: 'rgba(6, 182, 212, 0.5)',
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)',
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default FeaturedArticles
