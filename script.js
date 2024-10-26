document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = gsap.utils.toArray('.stagger-text');

    textElements.forEach((text) => {
        const words = text.querySelectorAll('.word');

        gsap.from(words, {
            scrollTrigger: {
                trigger: text,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 1,
                markers: true,
            },
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 1,
            ease: 'power2.out',
        });
    });
});