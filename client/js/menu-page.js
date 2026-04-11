// Menu Page JavaScript
const foodItems = [
    {
        id: 1,
        name: 'Grilled Chicken Peri Peri',
        price: 4500,
        quality: 'Premium',
        category: 'chicken',
        image: '../images/Grilled Chicken Peri Peri.jpeg',
        description: 'Succulent grilled chicken marinated in our special peri peri spice blend',
        quantity: 15
    },
    {
        id: 2,
        name: 'Party Jollof Rice',
        price: 2500,
        quality: 'Standard',
        category: 'rice',
        image: '../images/Party Jollof Rice.jpeg',
        description: 'Authentic Nigerian jollof rice that brings the party to your plate',
        quantity: 30
    },
    {
        id: 3,
        name: 'Beef Suya Special',
        price: 3800,
        quality: 'Premium',
        category: 'beef',
        image: '../images/Beef Suya Special.jpeg',
        description: 'Spicy beef suya with traditional Hausa spices and vegetables',
        quantity: 20
    },
    {
        id: 4,
        name: 'Fried Rice & Chicken',
        price: 3200,
        quality: 'Standard',
        category: 'rice',
        image: '../images/Fried Rice & Chicken.jpeg',
        description: 'Classic fried rice with tender chicken pieces and mixed vegetables',
        quantity: 25
    },
    {
        id: 5,
        name: 'Chicken Burger Deluxe',
        price: 2800,
        quality: 'Standard',
        category: 'chicken',
        image: '../images/Chicken Burger Deluxe.jpeg',
        description: 'Juicy chicken patty with fresh lettuce, tomato, and special sauce',
        quantity: 18
    },
    {
        id: 6,
        name: 'Beef Steak Pepper Soup',
        price: 4200,
        quality: 'Premium',
        category: 'beef',
        image: '../images/Beef Steak Pepper Soup.jpeg',
        description: 'Tender beef in aromatic pepper soup with local spices',
        quantity: 12
    },
    {
        id: 7,
        name: 'Vegetable Fried Rice',
        price: 2200,
        quality: 'Standard',
        category: 'rice',
        image: '../images/Vegetable Fried Rice.jpeg',
        description: 'Colorful mixed vegetables fried rice, perfect for vegetarians',
        quantity: 20
    },
    {
        id: 8,
        name: 'Chicken Wings BBQ',
        price: 3500,
        quality: 'Premium',
        category: 'chicken',
        image: '../images/Chicken Wings BBQ.jpeg',
        description: 'Tender chicken wings glazed with our signature BBQ sauce',
        quantity: 22
    },
    {
        id: 9,
        name: 'Beef Stir Fry',
        price: 3100,
        quality: 'Standard',
        category: 'beef',
        image: '../images/Beef Stir Fry.jpeg',
        description: 'Quick beef stir fry with colorful vegetables and soy sauce',
        quantity: 20
    },
    {
        id: 10,
        name: 'Coconut Rice & Shrimp',
        price: 3800,
        quality: 'Premium',
        category: 'rice',
        image: '../images/Coconut Rice & Shrimp.jpeg',
        description: 'Creamy coconut rice with succulent shrimp and herbs',
        quantity: 10
    },
    {
        id: 11,
        name: 'Chicken Salad',
        price: 2000,
        quality: 'Standard',
        category: 'chicken',
        image: '../images/Chicken Salad.jpeg',
        description: 'Fresh garden salad with grilled chicken strips and light dressing',
        quantity: 25
    },
    {
        id: 12,
        name: 'Beef Noodles',
        price: 2600,
        quality: 'Standard',
        category: 'beef',
        image: '../images/Beef Noodles.jpeg',
        description: 'Stir-fried noodles with tender beef strips and vegetables',
        quantity: 18
    },
    {
        id: 13,
        name: 'Spicy Chicken Shawarma',
        price: 3200,
        quality: 'Premium',
        category: 'chicken',
        image: '../images/Spicy Chicken Shawarma.jpeg',
        description: 'Middle-eastern style chicken wrapped in pita with garlic sauce',
        quantity: 20
    },
    {
        id: 14,
        name: 'Banga Rice & Fish',
        price: 3500,
        quality: 'Premium',
        category: 'rice',
        image: '../images/Banga Rice & Fish.jpeg',
        description: 'Traditional Niger Delta banga rice with fresh fish',
        quantity: 16
    },
    {
        id: 15,
        name: 'Beef Pepperoni Pizza',
        price: 4200,
        quality: 'Premium',
        category: 'beef',
        image: '../images/Beef Pepperoni Pizza.jpeg',
        description: 'Classic pizza with beef pepperoni and mozzarella cheese',
        quantity: 14
    },
    {
        id: 16,
        name: 'Chicken Pot Pie',
        price: 3600,
        quality: 'Premium',
        category: 'chicken',
        image: '../images/Chicken Pot Pie.jpeg',
        description: 'Creamy chicken and vegetable pie with flaky crust',
        quantity: 15
    },
    {
        id: 17,
        name: 'Jollof Spaghetti',
        price: 2300,
        quality: 'Standard',
        category: 'rice',
        image: '../images/Jollof Spaghetti.jpeg',
        description: 'Nigerian-style jollof pasta with mixed vegetables',
        quantity: 28
    },
    {
        id: 18,
        name: 'Beef Meatballs',
        price: 3400,
        quality: 'Premium',
        category: 'beef',
        image: '../images/Beef Meatballs.jpeg',
        description: 'Savory beef meatballs in rich tomato sauce',
        quantity: 18
    },
    {
        id: 19,
        name: 'Chicken Spring Rolls',
        price: 2800,
        quality: 'Standard',
        category: 'chicken',
        image: '../images/Chicken Spring Rolls.jpeg',
        description: 'Crispy spring rolls filled with seasoned chicken and vegetables',
        quantity: 24
    },
    {
        id: 20,
        name: 'Ofada Rice & Stew',
        price: 2900,
        quality: 'Standard',
        category: 'rice',
        image: '../images/Ofada Rice & Stew.jpeg',
        description: 'Traditional ofada rice with palm oil stew and assorted meat',
        quantity: 22
    },
    {
        id: 21,
        name: 'Beef Gizzard Sauce',
        price: 3300,
        quality: 'Standard',
        category: 'beef',
        image: '../images/Beef Gizzard Sauce.jpeg',
        description: 'Spicy gizzard sauce perfect with rice or yam',
        quantity: 16
    },
    {
        id: 22,
        name: 'Moimoi Deluxe',
        price: 1500,
        quality: 'Standard',
        category: 'other',
        image: '../images/Moimoi Deluxe png.jpeg',
        description: 'Steamed bean pudding with fish and spices',
        quantity: 20
    },
    {
        id: 23,
        name: 'Waakye Leaves',
        price: 2700,
        quality: 'Standard',
        category: 'rice',
        image: '../images/Waakye Leaves.jpeg',
        description: 'Ghanaian-style rice and beans with waakye leaves',
        quantity: 18
    }
];

let currentFilter = 'all';
let searchTerm = '';

// Initialize menu when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayFoodItems(foodItems);
});

// Display food items
function displayFoodItems(items) {
    const foodGrid = document.getElementById('foodGrid');
    
    if (items.length === 0) {
        foodGrid.innerHTML = '<div class="no-items"><h3>No food items found</h3><p>Try adjusting your search or filter criteria</p></div>';
        return;
    }
    
    foodGrid.innerHTML = items.map(item => `
        <div class="food-card">
            <div style="position: relative; overflow: hidden;">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400'">
                <div class="quality">${item.quality}</div>
            </div>
            <div class="food-card-content">
                <h3>${item.name}</h3>
                <div class="price">₦${item.price.toLocaleString()}</div>
                <p>${item.description}</p>
                <div class="available-quantity">
                    <strong>Available:</strong> ${item.quantity} plates
                </div>
                <div class="button-group">
                    <button class="order-now-btn" onclick="orderNow(${item.id})">Order Now</button>
                    <button class="multi-order-btn" onclick="addToCart(${item.id}, '${item.name}', ${item.price}, '${item.image}')">Multi-Order</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter food items
function filterFood(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    applyFilters();
}

// Search food items
function searchFood() {
    searchTerm = document.getElementById('searchInput').value.toLowerCase();
    applyFilters();
}

// Apply both search and category filters
function applyFilters() {
    let filteredItems = foodItems;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === currentFilter);
    }
    
    // Apply quality filter
    if (currentFilter === 'premium') {
        filteredItems = filteredItems.filter(item => item.quality === 'Premium');
    } else if (currentFilter === 'standard') {
        filteredItems = filteredItems.filter(item => item.quality === 'Standard');
    }
    
    // Apply search filter
    if (searchTerm) {
        filteredItems = filteredItems.filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayFoodItems(filteredItems);
}

// Order now function
function orderNow(itemId) {
    const item = foodItems.find(i => i.id === itemId);
    if (!item) return;
    
    // Clear cart first for single order
    localStorage.setItem('eazees_cart', JSON.stringify([]));
    
    // Add to cart and redirect to checkout
    addToCart(itemId, item.name, item.price, item.image);
    
    setTimeout(() => {
        window.location.href = 'cart.html';
    }, 1000);
}

// Add to cart function (from common.js)
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
    }
    
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Search input debounce
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            searchFood();
        }, 300);
    });
}
