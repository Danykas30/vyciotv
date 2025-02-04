  }, { rootMargin: "0px 0px -10% 0px" });

  // Observe all elements
  elements.forEach((el) => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, img, button");

  elements.forEach(el => el.classList.add("hidden-up"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.boundingClientRect.top < window.innerHeight * 0.2) {
          entry.target.classList.add("animate-up");
          entry.target.classList.remove("animate-down");
        } else {
          entry.target.classList.remove("animate-up");
          entry.target.classList.add("animate-down");
        }
      }
    });
  }, { threshold: 0.2 }); // Triggers when 20% of the element is visible

  elements.forEach(el => observer.observe(el));
});

