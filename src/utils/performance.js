// Optimize image loading
export const optimizeImage = (url, width) => {
  if (url.includes('upload.wikimedia.org')) {
    // Add width parameter for wikimedia images
    return `${url}?width=${width}`;
  }
  return url;
};

// Preload critical images
export const preloadCriticalImages = (images) => {
  images.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Lazy load images
export const lazyLoadImage = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.disconnect();
      }
    });
  });
  io.observe(target);
}; 