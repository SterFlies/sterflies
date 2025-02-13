document.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-speed]');

    parallaxElements.forEach(function(element) {
        const speed = element.getAttribute('data-speed');
        const yPos = -(scrolled * speed / 5);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let filterButtons = document.querySelectorAll(".filter-btn");
    let galleryItems = document.querySelectorAll(".gallery-item, .video-item");
    let inspectionSection = document.getElementById("inspection-gallery");

    // Hide the inspections section initially
    inspectionSection.style.display = "none";

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            let category = this.getAttribute("data-filter");

            // Loop through all gallery items (both images and videos)
            galleryItems.forEach(item => {
                let itemCategories = item.className.split(" "); // Get all assigned categories

                if (category === "all" || itemCategories.includes(category)) {
                    item.style.display = "flex"; // Keep items aligned in grid
                } else {
                    item.style.display = "none"; // Hide everything not selected
                }
            });

            // Toggle the inspections section visibility
            if (category === "inspections") {
                inspectionSection.style.display = "block"; // Show when selected
            } else {
                inspectionSection.style.display = "none"; // Hide when another category is selected
            }
        });
    });
});

// Lightbox Configuration
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true
});


