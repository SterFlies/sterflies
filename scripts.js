(function() {
    // Debounce function: limits how often the function runs.
    const debounce = (func, delay) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
      };
    };
  
    // Parallax Effect on Scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('[data-speed]');
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed');
        const yPos = -(scrolled * speed / 5);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };
  
    document.addEventListener('scroll', debounce(handleScroll, 10));
  
    // DOMContentLoaded for gallery filtering functionality
    document.addEventListener("DOMContentLoaded", () => {
      const filterButtons = document.querySelectorAll(".filter-btn");
      const galleryItems = document.querySelectorAll(".gallery-item, .video-item");
      const inspectionSection = document.getElementById("inspection-gallery");
  
      // Hide the inspections section initially
      inspectionSection.style.display = "none";
  
      filterButtons.forEach(button => {
        button.addEventListener("click", () => {
          const category = button.getAttribute("data-filter");
      
          galleryItems.forEach(item => {
            if (category === "all" || item.classList.contains(category)) {
              item.classList.remove("hidden");
            } else {
              item.classList.add("hidden");
            }
          });
  
          // Toggle the inspections section visibility
          inspectionSection.style.display = (category === "inspections") ? "block" : "none";
        });
      });
    });
  
    // Lightbox Configuration
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices': true
    });
  })();