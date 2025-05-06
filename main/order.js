function addToCart(name, price, image) {
  // Validate inputs
  if (!name || !price || !image) {
    showNotification("Error: Missing item details!", "error");
    return;
  }

  // Normalize image path
  let normalizedImage = image;
  if (!image.startsWith("../images/")) {
    if (!image.includes("/")) {
      normalizedImage = `../images/${image}`;
    } else if (!image.startsWith("../")) {
      normalizedImage = `../${image}`;
    }
  }

  // Get or initialize cart
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if item already exists in cart
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    cart.push({
      name: name,
      price: parseFloat(price),
      image: normalizedImage,
      quantity: 1,
    });
  }

  // Save to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Show success notification
  showNotification(`${name} added to cart!`, "success");

  // Update cart count in navbar
  updateCartCount();
}

function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  let cartCount = document.querySelector(".cart-count");
  if (!cartCount) {
    cartCount = document.createElement("span");
    cartCount.className = "cart-count";
    document.querySelector(".cart-link").appendChild(cartCount);
  }

  cartCount.textContent = totalItems;
  cartCount.style.display = totalItems > 0 ? "block" : "none";
}

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", updateCartCount);
