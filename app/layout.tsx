
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import LoadingScreen from '../components/home/LoadingScreen'
export const metadata: Metadata = {
  title: 'Brain.exe - Premium Personal Knowledge Hub',
  description: 'A futuristic digital magazine exploring Formula 1, Technology, AI, Future, Internet Culture, Deep Thoughts, and Random Cool Things.',
  keywords: ['Formula 1', 'Technology', 'AI', 'Future', 'Internet Culture', 'Blog', 'Knowledge Hub'],
  authors: [{ name: 'Brain.exe' }],
  creator: 'Brain.exe',
  publisher: 'Brain.exe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brain-exe.vercel.app',
    siteName: 'Brain.exe',
    title: 'Brain.exe - Premium Personal Knowledge Hub',
    description: 'A futuristic digital magazine exploring Formula 1, Technology, AI, and more.',
    images: [
      {
        url: 'https://brain-exe.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brain.exe',
    description: 'A futuristic digital magazine exploring Formula 1, Technology, AI, and more.',
    creator: '@brainexe',
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'light' || 
                    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.remove('dark')
                } else {
                  document.documentElement.classList.add('dark')
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="dark bg-dark-950">
        <LoadingScreen />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
