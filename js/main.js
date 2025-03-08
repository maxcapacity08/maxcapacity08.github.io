document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".mn-nav");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
    this.setAttribute(
      "aria-expanded",
      this.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
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
