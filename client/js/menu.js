// Menu page JavaScript

// Food data
const foodItems = [
    {
        id: 1,
        name: 'Grilled Chicken Peri Peri',
        price: 4500,
        quality: 'Premium',
        category: 'chicken',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
        description: 'Succulent grilled chicken marinated in our special peri peri spice blend',
        quantity: 15
    },
    {
        id: 2,
        name: 'Party Jollof Rice',
        price: 2500,
        quality: 'Standard',
        category: 'rice',
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d256?w=400',
        description: 'Authentic Nigerian jollof rice that brings the party to your plate',
        quantity: 30
    },
    {
        id: 3,
        name: 'Beef Suya Special',
        price: 3800,
        quality: 'Premium',
        category: 'beef',
        image: 'https://images.unsplash.com/photo-1541019268-36d195833c81?w=400',
        description: 'Spicy beef suya with traditional Hausa spices and vegetables',
        quantity: 20
    },
    {
        id: 4,
        name: 'Fried Rice & Chicken',
        price: 3200,
        quality: 'Standard',
        category: 'rice',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
        description: 'Classic fried rice with tender chicken pieces and mixed vegetables',
        quantity: 25
    },
    {
        id: 5,
        name: 'Chicken Burger Deluxe',
        price: 2800,
        quality: 'Standard',
        category: 'chicken',
        image: 'https://images.unsplash.com/photo-1555939594-58d4cbba1e0d?w=400',
        description: 'Juicy chicken patty with fresh lettuce, tomato, and special sauce',
        quantity: 18
    },
    {
        id: 6,
        name: 'Beef Steak Pepper Soup',
        price: 4200,
        quality: 'Premium',
        category: 'beef',
        image: 'https://images.unsplash.com/photo-1541019268-36d195833c81?w=400',
        description: 'Tender beef in aromatic pepper soup with local spices',
        quantity: 12
    },
    {
        id: 7,
        name: 'Vegetable Fried Rice',
        price: 2200,
        quality: 'Standard',
        category: 'rice',
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d256?w=400',
        description: 'Colorful mixed vegetables fried rice, perfect for vegetarians',
        quantity: 20
    },
    {
        
        id: 8,
        name: 'Chicken Wings BBQ',
        price: 3500,
        quality: 'Premium',
        category: 'chicken',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
        description: 'Tender chicken wings glazed with our signature BBQ sauce',
        quantity: 22
    },
    {
        id: 9,
        name: 'Beef Burrito',
        price: 3000,
        quality: 'Standard',
        category: 'beef',
        image: 'https://images.unsplash.com/photo-1541019268-36d195833c81?w=400',
        description: 'Seasoned beef wrapped in soft tortilla with rice and beans',
        quantity: 15
    },
    {
        id: 10,
        name: 'Coconut Rice & Shrimp',
        price: 3800,
        quality: 'Premium',
        category: 'rice',
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d256?w=400',
        description: 'Creamy coconut rice with succulent shrimp and herbs',
        quantity: 10
    },
    {
        id: 11,
        name: 'Chicken Salad',
        price: 2000,
        quality: 'Standard',
        category: 'chicken',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
        description: 'Fresh garden salad with grilled chicken strips and light dressing',
        quantity: 25
    },
    {
        id: 12,
        name: 'Beef Noodles',
        price: 2600,
        quality: 'Standard',
        category: 'beef',
        image: 'https://images.unsplash.com/photo-1541019268-36d195833c81?w=400',
        description: 'Stir-fried noodles with tender beef strips and vegetables',
        quantity: 18
    },
    {
        id: 13,
        name: 'Spicy Chicken Shawarma',
        price: 3200,
        quality: 'Premium',
        category: 'chicken',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
        description: 'Middle-eastern style chicken wrapped in pita with garlic sauce',
        quantity: 20
    },
    {
        id: 14,
        name: 'Banga Rice & Fish',
        price: 3500,
        quality: 'Premium',
        category: 'rice',
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d256?w=400',
        description: 'Traditional Niger Delta banga rice with fresh fish',
        quantity: 16
    },
    {
        id: 15,
        name: 'Beef Pepperoni Pizza',
        price: 4200,
        quality: 'Premium',
        category: 'beef',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
        description: 'Classic pizza with beef pepperoni and mozzarella cheese',
        quantity: 14
    },
    {
        id: 16,
        name: 'Chicken Tikka Masala',
        price: 3800,
        quality: 'Premium',
        category: 'chicken',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
        description: 'Indian-style chicken in creamy tomato curry with basmati rice',
        quantity: 12
    },
    {
        id: 17,
        name: 'Jollof Spaghetti',
        price: 2300,
        quality: 'Standard',
        category: 'rice',
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d256?w=400',
        description: 'Nigerian-style jollof pasta with mixed vegetables',
        quantity: 28
    },
    {
        id: 18,
        name: 'Beef Meatballs',
        price: 3400,
        quality: 'Premium',
        category: 'beef',
        image: 'https://images.unsplash.com/photo-1541019268-36d195833c81?w=400',
        description: 'Savory beef meatballs in rich tomato sauce',
        quantity: 18
    },
    {
        id: 19,
        name: 'Chicken Spring Rolls',
        price: 2800,
        quality: 'Standard',
        category: 'chicken',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
        description: 'Crispy spring rolls filled with seasoned chicken and vegetables',
        quantity: 24
    },
    {
        id: 20,
        name: 'Ofada Rice & Stew',
        price: 2900,
        quality: 'Standard',
        category: 'rice',
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d256?w=400',
        description: 'Traditional ofada rice with palm oil stew and assorted meat',
        quantity: 22
    },
    {
        id: 21,
        name: 'Beef Stir Fry',
        price: 3100,
        quality: 'Standard',
        category: 'beef',
        image: 'https://images.unsplash.com/photo-1541019268-36d195833c81?w=400',
        description: 'Quick beef stir fry with colorful vegetables and soy sauce',
        quantity: 20
    },
    {
        id: 22,
        name: 'Chicken Pot Pie',
        price: 3600,
        quality: 'Premium',
        category: 'chicken',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
        description: 'Creamy chicken and vegetable pie with flaky crust',
        quantity: 15
    },
    {
        id: 23,
        name: 'Waakye Leaves',
        price: 2700,
        quality: 'Standard',
        category: 'rice',
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d256?w=400',
        description: 'Ghanaian-style rice and beans with waakye leaves',
        quantity: 18
    },
    {
        id: 24,
        name: 'Beef Gizzard Sauce',
        price: 3300,
        quality: 'Standard',
        category: 'beef',
        image: 'https://images.unsplash.com/photo-1541019268-36d195833c81?w=400',
        description: 'Spicy gizzard sauce perfect with rice or yam',
        quantity: 16
    }
];

let currentFilter = 'all';
let searchTerm = '';

// Initialize menu when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayFoodItems(foodItems);
    
    // Check for reorder data
    const reorderData = sessionStorage.getItem('reorderData');
    if (reorderData) {
        const data = JSON.parse(reorderData);
        const foodItem = foodItems.find(item => item.name === data.foodName);
        if (foodItem) {
            openModal(foodItem);
        }
        sessionStorage.removeItem('reorderData');
    }
});

// Display food items
function displayFoodItems(items) {
    const foodGrid = document.getElementById('foodGrid');
    
    if (items.length === 0) {
        foodGrid.innerHTML = '<p style="text-align: center; color: var(--text-light); grid-column: 1/-1;">No food items found matching your criteria.</p>';
        return;
    }
    
    foodGrid.innerHTML = items.map(item => `
        <div class="food-card" onclick="openModal(${JSON.stringify(item).replace(/"/g, '&quot;')})">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400'">
            <div class="quality">${item.quality}</div>
            <div class="food-card-content">
                <h3>${item.name}</h3>
                <div class="price">${formatCurrency(item.price)}</div>
                <button class="order-btn" onclick="event.stopPropagation(); openModal(${JSON.stringify(item).replace(/"/g, '&quot;')})">Order</button>
                <p>${item.description}</p>
                <div style="margin-top: 10px; color: var(--text-light); font-size: 0.9rem;">
                    <strong>Available:</strong> ${item.quantity} plates
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

// Open modal with food details
function openModal(foodItem) {
    const modal = document.getElementById('orderModal');
    const modalFoodImage = document.getElementById('modalFoodImage');
    const modalFoodName = document.getElementById('modalFoodName');
    const modalFoodPrice = document.getElementById('modalFoodPrice');
    const modalFoodQuality = document.getElementById('modalFoodQuality');
    const modalFoodDescription = document.getElementById('modalFoodDescription');
    const modalFoodQuantity = document.getElementById('modalFoodQuantity');
    
    // Set modal content
    modalFoodImage.src = foodItem.image;
    modalFoodImage.alt = foodItem.name;
    modalFoodName.textContent = foodItem.name;
    modalFoodPrice.textContent = formatCurrency(foodItem.price);
    modalFoodQuality.textContent = foodItem.quality;
    modalFoodDescription.textContent = foodItem.description;
    modalFoodQuantity.innerHTML = `<strong>Available Quantity:</strong> ${foodItem.quantity} plates`;
    
    // Set max quantity based on available stock
    const orderQuantity = document.getElementById('orderQuantity');
    orderQuantity.max = foodItem.quantity;
    orderQuantity.value = 1;
    
    // Store food data for order submission
    modal.dataset.foodId = foodItem.id;
    modal.dataset.foodName = foodItem.name;
    modal.dataset.foodPrice = foodItem.price;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset form
    document.getElementById('orderForm').reset();
}

// Handle order form submission
document.getElementById('orderForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const modal = document.getElementById('orderModal');
    const foodName = modal.dataset.foodName;
    const price = parseFloat(modal.dataset.foodPrice);
    const quantity = parseInt(document.getElementById('orderQuantity').value);
    const address = document.getElementById('deliveryAddress').value.trim();
    const phone = document.getElementById('phoneNumber').value.trim();
    
    // Validate form
    if (!quantity || quantity < 1) {
        showToast('Please enter a valid quantity', 'error');
        return;
    }
    
    if (!address || address.length < 10) {
        showToast('Please enter a valid delivery address', 'error');
        return;
    }
    
    if (!phone || phone.length < 10) {
        showToast('Please enter a valid phone number', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Placing Order...';
    submitBtn.disabled = true;
    
    try {
        const orderData = {
            foodName,
            price,
            quantity,
            address,
            phone
        };
        
        const response = await API.post('/orders', orderData);
        
        if (response) {
            showToast(`Order placed successfully! Order ID: ${response.id}`, 'success');
            closeModal();
            
            // Optionally redirect to delivery tracking
            setTimeout(() => {
                if (confirm('Would you like to track your order?')) {
                    window.location.href = `delivery.html?orderId=${response.id}`;
                }
            }, 2000);
        }
    } catch (error) {
        console.error('Order submission error:', error);
        showToast('Failed to place order. Please try again.', 'error');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('orderModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Search input debounce
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', debounce(function() {
        searchFood();
    }, 300));
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Helper function to format currency
function formatCurrency(amount) {
    return `₦${amount.toLocaleString()}`;
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
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
    
    // Add animation class
    toast.style.animation = 'slideInUp 0.3s ease';
    
    setTimeout(() => {
        toast.classList.remove('show');
        toast.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// API helper functions
const API = {
    baseURL: '/api',
    
    request: async function(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    },
    
    post: function(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
};

// FAQ Toggle Function
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const allFaqItems = document.querySelectorAll('.faq-item');
    
    // Close all other FAQ items
    allFaqItems.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current FAQ item
    faqItem.classList.toggle('active');
}

// Contact Form Handler
function handleContactSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    
    // Validate form
    if (!name || !email || !phone || !message) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    if (!isValidPhone(phone)) {
        showToast('Please enter a valid phone number', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call (replace with actual API endpoint)
    setTimeout(() => {
        const contactData = {
            name,
            email,
            phone,
            message,
            timestamp: new Date().toISOString()
        };
        
        console.log('Contact form submission:', contactData);
        
        // Show success message
        showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Optional: Store in localStorage for demo purposes
        const messages = JSON.parse(localStorage.getItem('eazees_contact_messages') || '[]');
        messages.push(contactData);
        localStorage.setItem('eazees_contact_messages', JSON.stringify(messages));
        
    }, 1500);
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation helper
function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active section in navigation
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const navLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (navLink) {
                    document.querySelectorAll('.nav a').forEach(link => {
                        link.style.color = 'white';
                    });
                    navLink.style.color = '#ffd700';
                }
            }
        });
    });
});