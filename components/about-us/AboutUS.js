document.addEventListener("DOMContentLoaded", () => {
  console.log("About Us page loaded successfully");

  // Navbar shrink effect
  let lastScrollY = window.scrollY;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      navbar.classList.add("navbar-shrink");
    } else {
      // Scrolling up
      navbar.classList.remove("navbar-shrink");
    }
    lastScrollY = window.scrollY;
  });

  // Add animation to team members
  const teamMembers = document.querySelectorAll(".team-member");
  teamMembers.forEach((member, index) => {
    member.style.transitionDelay = `${index * 0.1}s`;
  });
});

document.querySelectorAll(".order-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const itemName = this.getAttribute("data-name");
    const itemPrice = parseFloat(this.getAttribute("data-price"));

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: itemName, price: itemPrice });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${itemName} added to cart!`);
  });
});
