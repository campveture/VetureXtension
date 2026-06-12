// Wait for DOM to load
document.addEventListener("DOMContentLoaded", (event) => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero Entrance Animation
  // Staggered fade-up for hero elements
  const heroTimeline = gsap.timeline();
  
  heroTimeline.fromTo(".hero-kicker", 
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
  )
  .fromTo(".hero-title", 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    "-=0.6" // overlapping start
  )
  .fromTo(".hero-subtitle", 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    "-=0.6"
  )
  .fromTo(".hero-actions", 
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    "-=0.6"
  );

  // 2. Scroll Reveals for Headers
  const revealElements = document.querySelectorAll(".gs-reveal");
  revealElements.forEach((elem) => {
    gsap.fromTo(elem, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 85%", // Triggers when top of element hits 85% of viewport
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // 3. Staggered Bento Grid Reveal
  gsap.fromTo(".gs-bento", 
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".bento-grid",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );

  // 4. Product Rows - Parallax/Fade
  const productRows = document.querySelectorAll(".gs-product");
  productRows.forEach((row) => {
    const info = row.querySelector(".product-info");
    const visual = row.querySelector(".product-visual");

    // Fade in text
    gsap.fromTo(info,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Fade and slight scale up for visual mockup window
    gsap.fromTo(visual,
      { x: 30, opacity: 0, scale: 0.95 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

});
