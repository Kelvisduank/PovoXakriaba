document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
  
    const options = {
      threshold: 0.5,
      rootMargin: "0px 0px -150px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, options);
  
    sections.forEach(section => {
      appearOnScroll.observe(section);
    });
  });
  