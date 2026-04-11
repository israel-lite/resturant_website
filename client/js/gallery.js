// Gallery JavaScript
const galleryImages = [
    {
        id: 1,
        src: '../images/Jollof Rice Special.jpeg',
        title: 'Jollof Rice Special',
        category: 'food',
        description: 'Our signature jollof rice with chicken'
    },
    {
        id: 2,
        src: '../images/Grilled Chicken Peri Peri.jpeg',
        title: 'Grilled Chicken Peri Peri',
        category: 'food',
        description: 'Spicy grilled chicken with special seasoning'
    },
    {
        id: 3,
        src: '../images/Beef Suya Special.jpeg',
        title: 'Beef Suya Special',
        category: 'food',
        description: 'Traditional Nigerian beef suya'
    },
    {
        id: 4,
        src: '../images/Fried Rice & Chicken.jpeg',
        title: 'Fried Rice & Chicken',
        category: 'food',
        description: 'Classic fried rice with tender chicken'
    },
    {
        id: 5,
        src: '../images/Chicken Burger Deluxe.jpeg',
        title: 'Chicken Burger Deluxe',
        category: 'food',
        description: 'Juicy chicken burger with fresh vegetables'
    },
    {
        id: 6,
        src: '../images/Beef Steak Pepper Soup.jpeg',
        title: 'Beef Steak Pepper Soup',
        category: 'food',
        description: 'Tender beef in aromatic pepper soup'
    },
    {
        id: 7,
        src: '../images/Vegetable Fried Rice.jpeg',
        title: 'Vegetable Fried Rice',
        category: 'food',
        description: 'Colorful mixed vegetables fried rice'
    },
    {
        id: 8,
        src: '../images/Chicken Wings BBQ.jpeg',
        title: 'Chicken Wings BBQ',
        category: 'food',
        description: 'Tender chicken wings with BBQ sauce'
    },
    {
        id: 9,
        src: '../images/Beef Stir Fry.jpeg',
        title: 'Beef Stir Fry',
        category: 'food',
        description: 'Quick beef stir fry with vegetables'
    },
    {
        id: 10,
        src: '../images/Coconut Rice & Shrimp.jpeg',
        title: 'Coconut Rice & Shrimp',
        category: 'food',
        description: 'Creamy coconut rice with succulent shrimp'
    },
    {
        id: 11,
        src: '../images/Chicken Salad.jpeg',
        title: 'Chicken Salad',
        category: 'food',
        description: 'Fresh garden salad with grilled chicken'
    },
    {
        id: 12,
        src: '../images/Beef Noodles.jpeg',
        title: 'Beef Noodles',
        category: 'food',
        description: 'Stir-fried noodles with tender beef'
    },
    {
        id: 13,
        src: '../images/Spicy Chicken Shawarma.jpeg',
        title: 'Spicy Chicken Shawarma',
        category: 'food',
        description: 'Middle-eastern style chicken shawarma'
    },
    {
        id: 14,
        src: '../images/Banga Rice & Fish.jpeg',
        title: 'Banga Rice & Fish',
        category: 'food',
        description: 'Traditional Niger Delta banga rice'
    },
    {
        id: 15,
        src: '../images/Beef Pepperoni Pizza.jpeg',
        title: 'Beef Pepperoni Pizza',
        category: 'food',
        description: 'Classic pizza with beef pepperoni'
    },
    {
        id: 16,
        src: '../images/Chicken Pot Pie.jpeg',
        title: 'Chicken Pot Pie',
        category: 'food',
        description: 'Creamy chicken and vegetable pie'
    },
    {
        id: 17,
        src: '../images/Jollof Spaghetti.jpeg',
        title: 'Jollof Spaghetti',
        category: 'food',
        description: 'Nigerian-style jollof pasta'
    },
    {
        id: 18,
        src: '../images/Beef Meatballs.jpeg',
        title: 'Beef Meatballs',
        category: 'food',
        description: 'Savory beef meatballs in tomato sauce'
    },
    {
        id: 19,
        src: '../images/Chicken Spring Rolls.jpeg',
        title: 'Chicken Spring Rolls',
        category: 'food',
        description: 'Crispy spring rolls with chicken'
    },
    {
        id: 20,
        src: '../images/Ofada Rice & Stew.jpeg',
        title: 'Ofada Rice & Stew',
        category: 'food',
        description: 'Traditional ofada rice with palm oil stew'
    },
    {
        id: 21,
        src: '../images/Beef Gizzard Sauce.jpeg',
        title: 'Beef Gizzard Sauce',
        category: 'food',
        description: 'Spicy gizzard sauce perfect with rice'
    },
    {
        id: 22,
        src: '../images/Moimoi Deluxe png.jpeg',
        title: 'Moimoi Deluxe',
        category: 'food',
        description: 'Steamed bean pudding with fish and spices'
    },
    {
        id: 23,
        src: '../images/Waakye Leaves.jpeg',
        title: 'Waakye Leaves',
        category: 'food',
        description: 'Ghanaian-style rice and beans'
    },
    {
        id: 24,
        src: '../images/Party Jollof Rice.jpeg',
        title: 'Party Jollof Rice',
        category: 'food',
        description: 'Large portion perfect for sharing'
    }
];

let currentFilter = 'all';

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', function() {
    renderGallery();
});

// Render gallery items
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    const filteredImages = currentFilter === 'all' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === currentFilter);
    
    galleryGrid.innerHTML = filteredImages.map(image => `
        <div class="gallery-item" onclick="openImageModal('${image.src}', '${image.title}', '${image.description}')">
            <img src="${image.src}" alt="${image.title}" onerror="this.src='../images/photo-1517248135467-4c7edcad34c4.jpeg'">
            <div class="gallery-overlay">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        </div>
    `).join('');
}

// Filter gallery
function filterGallery(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderGallery();
}

// Open image modal
function openImageModal(src, title, description) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = src;
    modalImage.alt = title;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close image modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('imageModal');
    if (e.target === modal) {
        closeImageModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});
