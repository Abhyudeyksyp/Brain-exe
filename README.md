# Brain.exe - Premium Personal Knowledge Hub

A stunning, production-ready Next.js blog featuring cinematic animations, glassmorphism design, and a premium digital magazine experience. Built for exploring Formula 1, Technology, AI, Future, Internet Culture, Deep Thoughts, and Random Cool Things.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.1-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue.svg)

## ✨ Features

### Core Experience
- **Fullscreen Animated Hero** with particle background and mouse tracking
- **Smooth Page Transitions** with Framer Motion
- **Reading Progress Indicator** with gradient animation
- **Command Menu (⌘K)** for instant article search
- **Responsive Design** from mobile to 4K displays
- **Dark Mode First** with carefully tuned color palette
- **Custom Cursor Glow** effect

### Article Experience
- **Dynamic Table of Contents** with scroll sync
- **Reading Time Estimation** calculated from word count
- **Beautiful Typography** with custom fonts
- **Syntax Highlighted Code Blocks**
- **Smooth Image Zoom** on hover
- **Quote Highlighting** with custom styling
- **Related Articles** suggestions
- **Bookmark & Like** functionality (frontend only)

### Performance & SEO
- **Lighthouse Score 90+** out of the box
- **Lazy Loading Images** with placeholder
- **Optimized Font Loading** with system fallbacks
- **Automatic Sitemap Generation**
- **RSS Feed Support**
- **Open Graph Metadata** for social sharing
- **Accessibility Features** with proper contrast ratios

### Animations & Interactions
- **Staggered Reveals** with controlled timing
- **Parallax Effects** on scroll
- **Hover Micro-interactions** on cards
- **Gradient Text Animations**
- **Smooth Scroll Progress** bar
- **Loading Screen** animation
- **Button Interactions** with smooth transitions

## 📁 Project Structure

```
brain-exe/
├── app/
│   ├── layout.tsx                 # Root layout with providers
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles and animations
│   ├── articles/
│   │   └── [slug]/
│   │       └── page.tsx           # Dynamic article pages
│   └── about/
│       └── page.tsx               # About page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx             # Navigation bar
│   │   └── Footer.tsx             # Footer component
│   ├── home/
│   │   ├── HeroSection.tsx        # Animated hero with glitch effect
│   │   ├── FeaturedArticles.tsx   # Featured articles carousel
│   │   ├── CategorySelector.tsx   # Category filter
│   │   └── ArticleGrid.tsx        # All articles grid
│   └── common/
│       ├── ParticleBackground.tsx # Canvas particle animation
│       ├── ScrollProgress.tsx      # Scroll progress bar
│       ├── CursorGlow.tsx         # Custom cursor effect
│       ├── CommandMenu.tsx        # ⌘K search menu
│       └── LoadingScreen.tsx      # Initial loading screen
│
├── content/
│   ├── f1-aerodynamics.md         # Sample F1 article
│   ├── transformers-ai.md         # Sample AI article
│   ├── apple-m-series.md          # Sample tech article
│   ├── attention-economy.md       # Sample future article
│   ├── open-web.md                # Sample internet culture article
│   ├── why-we-create.md           # Sample deep thoughts article
│   └── coffee-shop-wifi.md        # Sample random article
│
├── lib/
│   ├── mdx.ts                     # Article reading & processing
│   ├── types.ts                   # TypeScript interfaces
│   └── utils.ts                   # Utility functions
│
├── public/
│   ├── favicon.ico                # Favicon
│   └── og-image.png               # Open Graph image
│
├── next.config.js                 # Next.js configuration
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.ts             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
├── package.json                   # Dependencies
└── README.md                      # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone or download the project**
```bash
git clone https://github.com/yourusername/brain-exe.git
cd brain-exe
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Adding Articles

Articles are stored in the `/content` directory as Markdown files with YAML frontmatter.

### Article Format

```markdown
---
title: "Your Article Title"
description: "Brief description for SEO and previews"
date: "2024-01-15"
category: "Formula 1|Technology|AI|Future|Internet Culture|Deep Thoughts|Random"
author: "Brain.exe"
readingTime: 8
---

# Your Article Title

Article content in Markdown format...

## Section Header

More content...
```

### Creating a New Article

1. Create a new `.md` file in `/content`
```bash
touch content/my-article-slug.md
```

2. Add frontmatter and content (see format above)

3. Restart dev server - article will automatically appear

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | Yes | Article title (50-60 chars ideal) |
| description | string | Yes | SEO description (155-160 chars) |
| date | string | Yes | Publication date (YYYY-MM-DD) |
| category | string | Yes | Article category |
| author | string | No | Author name (defaults to "Brain.exe") |
| readingTime | number | No | Reading time in minutes (auto-calculated if omitted) |

## 🎨 Design System

### Color Palette
- **Background**: `#030712` (dark-950)
- **Surface**: `#1f2937` (dark-800)
- **Accent Cyan**: `#06b6d4`
- **Accent Purple**: `#9333ea`
- **Accent Blue**: `#3b82f6`

### Typography
- **Display Font**: Space Mono (futuristic)
- **Body Font**: Inter (clean, readable)
- **Code Font**: IBM Plex Mono (technical)

### Key Classes
- `.glass-effect` - Glassmorphism container
- `.btn-primary` - Primary CTA button
- `.btn-secondary` - Secondary button
- `.text-gradient` - Gradient text effect
- `.badge-accent` - Accent badge
- `.prose-custom` - Article prose styling

## 🔧 Configuration

### Site Metadata (`app/layout.tsx`)
Update the metadata object with your site information:
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ... other fields
}
```

### Categories
Edit category list in `components/home/CategorySelector.tsx`:
```typescript
const CATEGORIES = [
  { name: 'Formula 1', icon: '🏎️' },
  // Add more categories...
]
```

### Animation Timing
Adjust animation durations in component transition properties:
```typescript
transition={{ duration: 0.6 }} // Increase for slower animations
```

## 📊 SEO Optimization

### Built-in Features
- Meta tags for all pages
- Open Graph image tags
- Twitter card support
- Automatic sitemap generation
- RSS feed support
- Structured data (schema.org)

### Customization
1. Update `og-image.png` in `/public`
2. Modify metadata in `app/layout.tsx`
3. Create `/public/robots.txt` for crawlers
4. Add Google Analytics if needed

## 🚢 Deployment

### Deploy to Vercel (Recommended)

Vercel is optimized for Next.js and offers one-click deployment.

1. **Push code to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Select your GitHub repository
- Click "Deploy"

3. **Custom Domain**
- Go to project Settings
- Add your domain
- Update DNS records as instructed

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Deploy the .next folder via Netlify UI or CLI
```

#### Docker (Self-hosted)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY .next ./
EXPOSE 3000
CMD ["npm", "start"]
```

#### Traditional Hosting (cPanel, etc.)
1. Run `npm run build`
2. Upload `.next`, `public`, and `node_modules` to server
3. Run `npm start`
4. Use PM2 or systemd for process management

## 📈 Performance Optimization

### Current Optimizations
- Image lazy loading
- Font optimization with system fallbacks
- CSS minification
- JavaScript code splitting
- Static file caching

### Further Optimization
1. Add image optimization service (Cloudinary, Imgix)
2. Use CDN for static assets (Cloudflare, BunnyCDN)
3. Enable compression (gzip, brotli)
4. Implement service worker for offline support

## 🔐 Security

- CSP headers configured
- CORS headers set
- XSS protection enabled
- Clickjacking protection
- Content sniffing prevention

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## ⚙️ Environment Variables

Create a `.env.local` file (optional):
```
NEXT_PUBLIC_SITE_URL=https://brain-exe.vercel.app
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🐛 Troubleshooting

### Articles not appearing
- Ensure markdown files are in `/content` directory
- Check frontmatter format (YAML must be valid)
- Restart dev server
- Check browser console for errors

### Animations not smooth
- Check browser hardware acceleration is enabled
- Reduce number of particles if on older device
- Disable some animations in `globals.css`
- Test in different browser

### Build errors
- Run `npm install` again
- Clear `.next` folder: `rm -rf .next`
- Ensure Node.js version is 18+
- Check all import paths

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)

## 🎯 Future Enhancements

Potential features to add:
- [ ] Comment system (Giscus, Utterances)
- [ ] Newsletter integration (Mailchimp, Substack)
- [ ] Social sharing buttons
- [ ] Article series/collections
- [ ] Dark mode toggle (currently dark-first)
- [ ] Search analytics
- [ ] Related articles based on ML
- [ ] PWA offline support
- [ ] Article export (PDF, EPUB)
- [ ] Multi-language support

## 📄 License

MIT License - feel free to use this project for personal or commercial projects.

## 🙏 Credits

- Animations inspired by Apple, Stripe, Linear
- Design influenced by premium digital publications
- Built with Next.js, React, Framer Motion, and Tailwind CSS

## 📧 Support

For issues, questions, or suggestions:
1. Check the troubleshooting section
2. Review Next.js documentation
3. Open an issue on GitHub

---

**Built with ✨ and precision**

Brain.exe • A Premium Knowledge Hub for the Curious Mind

---

## Quick Command Reference

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Maintenance
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types

# Deployment
# Push to GitHub → Deploy via Vercel
```

## File Modification Guide

**To customize**, edit these key files:
- **Brand/Metadata**: `app/layout.tsx`
- **Colors**: `tailwind.config.ts`
- **Fonts**: `tailwind.config.ts` and `app/globals.css`
- **Hero Text**: `components/home/HeroSection.tsx`
- **Navigation**: `components/layout/Navbar.tsx`
- **Footer**: `components/layout/Footer.tsx`

## Version Info

- **Next.js**: 14.1+
- **React**: 18.2+
- **TypeScript**: 5.3+
- **Tailwind CSS**: 3.4+
- **Framer Motion**: 10.16+

Last updated: January 2024
