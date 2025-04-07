document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const testimonials = document.querySelector(".testimonial-container");

  const portfolioItems = [
    "Design Project A",
    "Branding Project B",
    "Web App C"
  ];

  portfolioItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "slide";
    div.textContent = item;
    slider.appendChild(div);
  });

  const reviews = [
    "Amazing team to work with!",
    "They helped our brand grow digitally.",
    "Best agency in Batumi!"
  ];

  reviews.forEach(text => {
    const p = document.createElement("p");
    p.className = "testimonial";
    p.textContent = `"${text}"`;
    testimonials.appendChild(p);
  });
});
