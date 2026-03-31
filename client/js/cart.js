// Cart JavaScript
let cart = [];

// Initialize cart when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    renderCart();
    updateCartCount();
});

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('eazees_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('eazees_cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count in navigation
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Render cart items
function renderCart() {
    const cartContent = document.getElementById('cartContent');
    if (!cartContent) return;
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Add some delicious items from our menu to get started!</p>
                <a href="menu.html" class="continue-shopping">Browse Menu</a>
            </div>
        `;
        return;
    }
    
    const subtotal = calculateSubtotal();
    const deliveryFee = subtotal > 5000 ? 0 : 200;
    const total = subtotal + deliveryFee;
    
    cartContent.innerHTML = `
        <div class="cart-container">
            <div class="cart-items">
                <h2>Shopping Cart (${cart.length} items)</h2>
                ${cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400'">
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">₦${item.price.toLocaleString()}</div>
                            <div class="cart-item-quantity">
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                                <span class="quantity-value">${item.quantity}</span>
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            </div>
                        </div>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                `).join('')}
            </div>
            <div class="cart-summary">
                <h3>Order Summary</h3>
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>₦${subtotal.toLocaleString()}</span>
                </div>
                <div class="summary-row">
                    <span>Delivery Fee:</span>
                    <span>${deliveryFee === 0 ? 'FREE' : '₦' + deliveryFee.toLocaleString()}</span>
                </div>
                <div class="summary-row total">
                    <span>Total:</span>
                    <span>₦${total.toLocaleString()}</span>
                </div>
                <button class="checkout-btn" onclick="openCheckoutModal()">Proceed to Checkout</button>
                <p style="text-align: center; margin-top: 1rem; color: #666; font-size: 0.9rem;">
                    Free delivery for orders above ₦5,000
                </p>
            </div>
        </div>
    `;
}

// Calculate cart subtotal
function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Update item quantity
function updateQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        saveCart();
        renderCart();
    }
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    renderCart();
    showToast('Item removed from cart', 'success');
}

// Open checkout modal
function openCheckoutModal() {
    if (cart.length === 0) {
        showToast('Your cart is empty', 'error');
        return;
    }
    
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Pre-fill customer information if available
        const customerInfo = JSON.parse(localStorage.getItem('eazees_customer_info') || '{}');
        if (customerInfo.name) document.getElementById('checkoutName').value = customerInfo.name;
        if (customerInfo.phone) document.getElementById('checkoutPhone').value = customerInfo.phone;
        if (customerInfo.address) document.getElementById('checkoutAddress').value = customerInfo.address;
    }
}

// Close checkout modal
function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.getElementById('checkoutForm').reset();
    }
}

// Process checkout
function processCheckout(event) {
    event.preventDefault();
    
    const name = document.getElementById('checkoutName').value.trim();
    const phone = document.getElementById('checkoutPhone').value.trim();
    const address = document.getElementById('checkoutAddress').value.trim();
    const notes = document.getElementById('checkoutNotes').value.trim();
    
    // Validate form
    if (!name || !phone || !address) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    if (!isValidPhone(phone)) {
        showToast('Please enter a valid phone number', 'error');
        return;
    }
    
    // Save customer information for future orders
    const customerInfo = { name, phone, address };
    localStorage.setItem('eazees_customer_info', JSON.stringify(customerInfo));
    
    // Generate order ID
    const orderId = generateOrderId();
    
    // Calculate totals
    const subtotal = calculateSubtotal();
    const deliveryFee = subtotal > 5000 ? 0 : 200;
    const total = subtotal + deliveryFee;
    
    // Create order object
    const order = {
        id: orderId,
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            subtotal: item.price * item.quantity
        })),
        customer: { name, phone, address },
        notes: notes,
        subtotal: subtotal,
        deliveryFee: deliveryFee,
        total: total,
        status: 'pending',
        timestamp: new Date().toISOString(),
        estimatedDelivery: new Date(Date.now() + 45 * 60000).toISOString() // 45 minutes from now
    };
    
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Save order to localStorage (in real app, this would be sent to server)
        const orders = JSON.parse(localStorage.getItem('eazees_orders') || '[]');
        orders.push(order);
        localStorage.setItem('eazees_orders', JSON.stringify(orders));
        
        // Clear cart
        cart = [];
        saveCart();
        
        // Close modal
        closeCheckoutModal();
        
        // Show success message
        showToast(`Order placed successfully! Order ID: ${orderId}`, 'success');
        
        // Redirect to order history
        setTimeout(() => {
            window.location.href = 'history.html';
        }, 2000);
        
    }, 2000);
}

// Generate unique order ID
function generateOrderId() {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
    return `EZ-${year}-${random}`;
}

// Phone validation helper
function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('checkoutModal');
    if (e.target === modal) {
        closeCheckoutModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCheckoutModal();
    }
});
