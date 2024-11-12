export default function imageLoader({ src, width, quality }) {
    const isProduction = process.env.NODE_ENV === 'production'
    const basePath = isProduction ? '/ASP' : ''
    
    // If src is an absolute URL, return it as-is
    if (src.startsWith('http') || src.startsWith('//')) {
      return src
    }
  
    // If src starts with a slash, append it to the base path
    if (src.startsWith('/')) {
      return `${basePath}${src}`
    }
  
    // Otherwise, treat it as a relative path
    return src
  }