export function load(img) {
    const src = img.getAttribute('data-src');
    if (!src) return;
    img.setAttribute('src', src);
    img.removeAttribute('data-src');
    img.classList.add('lazy-loaded');
}

export function ready() {
    const lazyImgs = document.querySelectorAll('img.lazy');

    if ('IntersectionObserver' in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    load(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        lazyImgs.forEach(img => {
            observer.observe(img);
        });
    } else {
        const lazyLoad = () => {
            lazyImgs.forEach(img => {
                if (img.getBoundingClientRect().top <= window.innerHeight && img.getBoundingClientRect().bottom >= 0 && getComputedStyle(img).display !== "none") {
                    load(img);
                }
            });
        };

        window.addEventListener('scroll', lazyLoad);
        window.addEventListener('resize', lazyLoad);
        lazyLoad();
    }


}
