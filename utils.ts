export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const truncate = (text: string, length: number = 160): string => {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

export const extractHeadings = (content: string) => {
  const headings = []
  const regex = /^#{1,6}\s+(.+)$/gm
  let match

  while ((match = regex.exec(content)) !== null) {
    const level = match[0].match(/^#+/)[0].length
    headings.push({
      level,
      text: match[1],
      id: match[1].toLowerCase().replace(/\s+/g, '-'),
    })
  }

  return headings
}
