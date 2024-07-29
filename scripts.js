document.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-speed]');

    parallaxElements.forEach(function(element) {
        const speed = element.getAttribute('data-speed');
        const yPos = -(scrolled * speed / 5);
        element.style.transform = `translateY(${yPos}px)`;
    });
});
