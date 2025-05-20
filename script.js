document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".diagram-container");

  function updateArcs(colorOrUrl) {
    const leftArcs = container.querySelectorAll('.left-arc line, .left-arc path');
    leftArcs.forEach(el => el.style.stroke = colorOrUrl);
    const rightArcs = container.querySelectorAll('.right-arc line, .right-arc path');
    rightArcs.forEach(el => el.style.stroke = colorOrUrl);
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        container.classList.add("hovered");
        updateArcs("url(#hoverGradientLeft)");
        updateArcs("url(#hoverGradientRight)");
      } else {
        container.classList.remove("hovered");
        updateArcs("#858585");
      }
    });
  }, {
    threshold: 0  
  });

  io.observe(container);
});
