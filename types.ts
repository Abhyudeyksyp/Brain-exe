export interface Article {
  slug: string
  title: string
  description: string
  date: string
  category: 'Formula 1' | 'Technology' | 'AI' | 'Future' | 'Internet Culture' | 'Deep Thoughts' | 'Random'
  readingTime: number
  author: string
  content: string
}

export interface ArticleMetadata {
  title: string
  description: string
  date: string
  category: string
  author: string
  readingTime?: number
}
