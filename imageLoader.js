export default function imageLoader({ src, width, quality }) {
    const basePath = ''; // Set this to '' for custom domain consistency
    
    return src.startsWith('http') || src.startsWith('//') ? src : `${basePath}${src}`;
}
