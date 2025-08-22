// ...existing code...
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

export function lazyAll(node: HTMLElement, params?: IntersectionObserverInit) {
    function observation(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const target = entry.target as HTMLImageElement;
            if (target.dataset.src) {
                target.setAttribute('alt', 'A lazy dog');
                target.src = target.dataset.src;
            }
            observer.unobserve(target);
        });
    }

    const observer = new IntersectionObserver(observation, params);

    const imgs = node.querySelectorAll<HTMLImageElement>('img');
    imgs.forEach(img => observer.observe(img));

    return {
        destroy() {
            imgs.forEach(img => observer.unobserve(img));
        }
    };
}
// ...existing code...