function addToCart(name, price, image) {
    console.log("Adding to cart:", name, price, image); // Debugging log

    if (!name || !price || !image) {
        alert("Error: Missing item details!");
        return;  // Stop execution if any value is missing
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: parseFloat(price),  
        image: image
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
}
