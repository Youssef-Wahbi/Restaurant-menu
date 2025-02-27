
    document.querySelectorAll(".order-btn").forEach(button => {
        button.addEventListener("click", function() {
            const itemName = this.getAttribute("data-name");
            const itemPrice = parseFloat(this.getAttribute("data-price"));

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push({ name: itemName, price: itemPrice });

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${itemName} added to cart!`);
        });
    })

   
    
    
    
    
    
