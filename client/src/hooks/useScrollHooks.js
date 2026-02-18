import { useEffect, useState } from 'react';

/**
 * Debounce scroll events for better performance
 * Prevents excessive function calls during scrolling
 */
export const useScrollDebounce = (callback, delay = 150) => {
    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                callback();
            }, delay);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, [callback, delay]);
};

/**
 * Hook to get smooth scroll position
 * Used for optimized scroll-based effects
 */
export const useScrollPosition = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            setScrollY(window.scrollY);
            setIsScrolling(true);

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 150);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    return { scrollY, isScrolling };
};
