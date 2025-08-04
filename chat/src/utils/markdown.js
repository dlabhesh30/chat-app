import { marked } from 'marked'
import DOMPurify from 'dompurify'

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: false,
  mangle: false
})

// Custom renderer for better styling
const renderer = new marked.Renderer()

// Customize code blocks
renderer.code = (code, language) => {
  return `<pre><code class="language-${language || 'text'}">${code}</code></pre>`
}

// Customize inline code
renderer.codespan = (code) => {
  return `<code>${code}</code>`
}

// Customize blockquotes
renderer.blockquote = (quote) => {
  return `<blockquote>${quote}</blockquote>`
}

// Customize lists
renderer.list = (body, ordered) => {
  const type = ordered ? 'ol' : 'ul'
  return `<${type}>${body}</${type}>`
}

// Customize list items
renderer.listitem = (text) => {
  return `<li>${text}</li>`
}

// Customize paragraphs
renderer.paragraph = (text) => {
  return `<p>${text}</p>`
}

// Customize headings
renderer.heading = (text, level) => {
  return `<h${level}>${text}</h${level}>`
}

// Customize links
renderer.link = (href, title, text) => {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer" title="${title || ''}">${text}</a>`
}

marked.use({ renderer })

// Function to render markdown safely
export const renderMarkdown = (markdownText) => {
  try {
    // Convert markdown to HTML
    const html = marked(markdownText)
    
    // Sanitize HTML to prevent XSS
    const sanitizedHtml = DOMPurify.sanitize(html, {
      ALLOWED_TAGS: [
        'p', 'br', 'strong', 'em', 'u', 's', 'code', 'pre',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'ul', 'ol', 'li',
        'blockquote',
        'a'
      ],
      ALLOWED_ATTR: ['href', 'target', 'rel', 'title', 'class'],
      ALLOW_DATA_ATTR: false
    })
    
    return sanitizedHtml
  } catch (error) {
    console.error('Error rendering markdown:', error)
    // Return escaped text if markdown rendering fails
    return DOMPurify.sanitize(markdownText.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
  }
}

// Function to detect if text contains markdown
export const containsMarkdown = (text) => {
  const markdownPatterns = [
    /[*_]{1,2}[^*_]+[*_]{1,2}/, // Bold/italic
    /^#{1,6}\s/, // Headers
    /^[-*+]\s/, // Unordered lists
    /^\d+\.\s/, // Ordered lists
    /^>\s/, // Blockquotes
    /`[^`]+`/, // Inline code
    /```[\s\S]*```/, // Code blocks
    /\[([^\]]+)\]\(([^)]+)\)/, // Links
    /^\s*[-*+]\s/, // List items
    /^\s*\d+\.\s/ // Numbered list items
  ]
  
  return markdownPatterns.some(pattern => pattern.test(text))
}

// Function to format timestamp
export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diffInHours = (now - date) / (1000 * 60 * 60)
  
  if (diffInHours < 24) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  } else if (diffInHours < 48) {
    return 'Yesterday'
  } else {
    return date.toLocaleDateString()
  }
}