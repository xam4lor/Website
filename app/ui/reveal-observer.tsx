'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function RevealObserver() {
    const pathname = usePathname();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.setAttribute('data-visible', 'true');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.06, rootMargin: '0px 0px -32px 0px' }
        );

        document.querySelectorAll('[data-reveal]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, [pathname]);

    return null;
}
