
// ==================== ORDER NOW BUTTON LOGIC ====================
document.addEventListener("DOMContentLoaded", () => {
    const orderBtn = document.querySelector(".order-btn");
    if (!orderBtn) return;

    orderBtn.addEventListener("click", () => {
        // Get product name dynamically
        const productNameEl = document.querySelector(".product-details h1");
        const productName = productNameEl ? productNameEl.innerText : "Product";

        // Get price dynamically (offer price first, fallback to normal price)
        const priceEl = document.querySelector(".prize2") || document.querySelector(".price");
        const price = priceEl ? priceEl.innerText : "₹ 0";

        // Construct WhatsApp message
        const message = `Hello SMF Fitness,%0A` +
            `I want to order this product:%0A` +
            `Product: ${productName}%0A` +
            `Price: ${price}%0A` +
            `Please contact me.`;

        // 🔴 Replace with your WhatsApp number including country code
        const whatsappNumber = "91XXXXXXXXXX";

        // Open WhatsApp with pre-filled message
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappURL, "_blank");

        // Save order amount to localStorage for Order Completed page
        localStorage.setItem("orderAmount", price);
    });
});

// ==================== ORDER COMPLETED PAGE LOGIC ====================
document.addEventListener("DOMContentLoaded", () => {
    const orderIdEl = document.getElementById("orderId");
    const orderDateEl = document.getElementById("orderDate");
    const orderAmountEl = document.getElementById("orderAmount");

    if (orderIdEl) {
        // Generate random 6-digit order ID
        const randomOrderId = Math.floor(Math.random() * 900000 + 100000);
        orderIdEl.innerText = `#${randomOrderId}`;
    }

    if (orderDateEl) {
        // Current date and time
        const now = new Date();
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        orderDateEl.innerText = now.toLocaleDateString('en-US', options);
    }

    if (orderAmountEl) {
        // Retrieve saved amount from localStorage
        const storedAmount = localStorage.getItem("orderAmount") || "₹ 0.00";
        orderAmountEl.innerText = storedAmount;
    }
});

// ==================== ORDER COMPLETED PAGE BUTTONS ====================
function goHome() {
    window.location.href = "index.html"; // Redirect to home page
}

function printPage() {
    window.print(); // Print page
}
