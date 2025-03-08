document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".mn-nav");
  const navLinks = document.querySelectorAll(".mn-nav a");

  // Toggle menu
  hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
    // Accessibility
    const isExpanded = nav.classList.contains("active");
    hamburger.setAttribute("aria-expanded", isExpanded);
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      nav.classList.remove("active");
      hamburger.setAttribute("aria-expanded", false);
    }
  });

  // Close menu when link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      hamburger.setAttribute("aria-expanded", false);
    });
  });

  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".skill-tag").forEach((tag) => {
    observer.observe(tag);
  });
});
