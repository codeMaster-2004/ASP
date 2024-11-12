export default function imageLoader({ src, width, quality }) {
    const isProduction = process.env.NODE_ENV === 'production';
    const basePath = isProduction ? '/ASP' : '';
    
    // Append basePath regardless of leading slash
    return src.startsWith('http') || src.startsWith('//') ? src : `${basePath}/${src}`;
}
