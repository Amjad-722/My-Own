
export function lazy(node: HTMLImageElement, params?: IntersectionObserverInit) {
    function observation(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
        const entry = entries[0];
        if (!entry || !entry.isIntersecting) return;
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
            img.setAttribute('alt', 'A cute dog');
            img.src = img.dataset.src;
        }
        observer.unobserve(img);
    }

    const observer = new IntersectionObserver(observation, params);

    observer.observe(node);

    return {
        destroy() {
            observer.unobserve(node);
        }
    };
}



// ...existing code...