(function() {
    /**
     * Throttle function: limits how often `func` runs to once every `limit` ms.
     */
    function throttle(func, limit) {
      let inThrottle;
      return (...args) => {
        if (!inThrottle) {
          func(...args);
          inThrottle = true;
          setTimeout(() => {
            inThrottle = false;
          }, limit);
        }
      };
    }
  
    function handleScroll() {
        // Use scrollY instead of pageYOffset
        const scrolled = window.scrollY;
        const parallaxElements = document.querySelectorAll('[data-speed]');
        parallaxElements.forEach(element => {
          const speed = element.getAttribute('data-speed');
          const yPos = -(scrolled * speed / 5);
          element.style.transform = `translateY(${yPos}px)`;
        });
      }
  
    // Throttle the parallax updates to reduce lag
    document.addEventListener('scroll', throttle(handleScroll, 50));
  
    /**
     * DOMContentLoaded for gallery filtering
     */
    document.addEventListener('DOMContentLoaded', () => {
      const filterButtons = document.querySelectorAll('.filter-btn');
      const galleryItems = document.querySelectorAll('.gallery-item, .video-item');
      const inspectionSection = document.getElementById('inspection-gallery');
  
      // Hide the inspections section initially
      inspectionSection.style.display = 'none';
  
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          const category = button.getAttribute('data-filter');
  
          // Toggle .hidden class instead of setting inline styles
          galleryItems.forEach(item => {
            if (category === 'all' || item.classList.contains(category)) {
              item.classList.remove('hidden');
            } else {
              item.classList.add('hidden');
            }
          });
  
          // Toggle the inspections section visibility
          inspectionSection.style.display = (category === 'inspections') ? 'block' : 'none';
        });
      });
    });
  
    /**
     * Lightbox Configuration
     */
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
      alwaysShowNavOnTouchDevices: true
    });
  })();  