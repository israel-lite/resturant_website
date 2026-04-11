// Home Page JavaScript
const popularItems = [
    {
        id: 1,
        name: "Jollof Rice Special",
        price: 3500,
        image: "images/Jollof Rice Special.jpeg",
        description: "Our signature jollof rice with perfectly spiced chicken"
    },
    {
        id: 2,
        name: "Fried Rice & Chicken",
        price: 3200,
        image: "images/Fried Rice & Chicken.jpeg",
        description: "Crispy fried rice with tender grilled chicken"
    },
    {
        id: 3,
        name: "Beef Suya Special",
        price: 2800,
        image: "images/Beef Suya Special.jpeg",
        description: "Spicy beef suya with traditional seasoning"
    },
    {
        id: 4,
        name: "Chicken Burger Deluxe",
        price: 2500,
        image: "images/Chicken Burger Deluxe.jpeg",
        description: "Juicy chicken burger with fresh vegetables"
    },
    {
        id: 5,
        name: "Moimoi Deluxe",
        price: 1500,
        image: "images/Moimoi Deluxe png.jpeg",
        description: "Steamed bean pudding with fish and spices"
    },
    {
        id: 6,
        name: "Party Jollof Rice",
        price: 4500,
        image: "images/Party Jollof Rice.jpeg",
        description: "Large portion perfect for sharing at parties"
    }
];

// Initialize home page
document.addEventListener('DOMContentLoaded', function() {
    loadPopularItems();
    updateCartCount();
});

// Load popular items
function loadPopularItems() {
    const popularGrid = document.getElementById('popularGrid');
    if (!popularGrid) return;
    
    popularGrid.innerHTML = popularItems.map(item => `
        <div class="popular-item">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400'">
            <div class="popular-content">
                <h3>${item.name}</h3>
                <div class="popular-price">N${item.price.toLocaleString()}</div>
                <div class="button-group">
                    <button class="order-now-btn" onclick="orderNow(${item.id}, '${item.name}', ${item.price}, '${item.image}')">Order Now</button>
                    <button class="multi-order-btn" onclick="addToCart(${item.id}, '${item.name}', ${item.price}, '${item.image}')">Multi-Order</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Order now function
function orderNow(itemId, itemName, itemPrice, itemImage) {
    // Clear cart first for single order
    localStorage.setItem('eazees_cart', JSON.stringify([]));
    
    // Add item to cart
    addToCart(itemId, itemName, itemPrice, itemImage);
    
    // Redirect to cart page
    window.location.href = 'pages/cart.html';
}

// Add to cart function
function addToCart(itemId, itemName, itemPrice, itemImage) {
    let cart = JSON.parse(localStorage.getItem('eazees_cart') || '[]');
    
    const existingItem = cart.find(item => item.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: itemId,
            name: itemName,
            price: itemPrice,
            image: itemImage,
            quantity: 1
        });
    }
    
    localStorage.setItem('eazees_cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`${itemName} added to cart!`, 'success');
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const cart = JSON.parse(localStorage.getItem('eazees_cart') || '[]');
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Toast notification function
function showToast(message, type = 'success') {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
        
        // Add toast styles
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: bold;
            z-index: 3000;
            opacity: 0;
            transform: translateY(100px);
            transition: all 0.3s ease;
        `;
    }
    
    toast.textContent = message;
    toast.style.background = type === 'success' ? '#27ae60' : '#e74c3c';
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(100px)';
    }, 3000);
}
