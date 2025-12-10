// NAVBAR COLOR CHANGE ON SCROLL
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
  
  
  // FADE-IN ANIMATION ON SCROLL
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });
  
  document.querySelectorAll(".fade-section").forEach((section) => {
    observer.observe(section);
  });
  