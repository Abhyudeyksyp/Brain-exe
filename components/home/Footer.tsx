'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Categories',
      links: [
        { name: 'Formula 1', href: '#' },
        { name: 'Technology', href: '#' },
        { name: 'AI & Future', href: '#' },
        { name: 'Internet Culture', href: '#' },
      ],
    },
    {
title:'Resources',

links:[

{
name:'All Articles',
href:'/articles'
},

{
name:'About Me',
href:'/about'
},

{
name:'Search',
href:'/search'
},

{
name:'Featured',
href:'/articles/apple-m-series'
}

]

},
    {
      title: 'Connect',
      links: [
        { name: 'Instagram', href: 'https://www.instagram.com/abhyudeyk/' },
        { name: 'GitHub', href: 'https://github.com/Abhyudeyksyp/Brain-exe' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abhyudaya-kashyap-a56a70323/' },
        { name: 'Email', href: 'abhyudayksyp3007@gmail.com' },
      ],
    },
  ]

  return (
    <footer className="relative border-t border-dark-800 bg-dark-950/50 backdrop-blur-sm">
      <div className="container-max py-16 md:py-24">
        {/* Main content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-display font-bold text-gradient mb-4">
              Brain.exe
            </h3>
            <p className="text-dark-400 text-sm leading-relaxed">
              A premium digital magazine 
              Made with passion of coding late nights coffees and lil use of AI.
              Brain.exe is where random thoughts become deep dives.
              No clickbait. Just cool things explained beautifully
              Site By ABHYUDAYA KASHYAP
              LOVE LOVE:)
            </p>
          </motion.div>

          {/* Links sections */}
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h4 className="text-sm font-semibold text-dark-100 uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <span className="text-sm text-dark-400 hover:text-accent-cyan transition-colors duration-300 cursor-pointer">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-dark-500 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Brain.exe. Built with Next.js, Framer Motion, and MIND OF 20 YEAR OLD.
          </p>

          {/* Status indicator */}
          <motion.div
            className="flex items-center gap-2 text-sm text-dark-400"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span>All systems operational</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
