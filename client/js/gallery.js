// Gallery JavaScript
const galleryImages = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
        title: 'Jollof Rice Special',
        category: 'food',
        description: 'Our signature jollof rice with chicken'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1555939594-58d4cbba1e0d?w=400',
        title: 'Grilled Chicken Peri Peri',
        category: 'food',
        description: 'Spicy grilled chicken with special seasoning'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1541019268-36d195833c81?w=400',
        title: 'Beef Suya',
        category: 'food',
        description: 'Traditional Nigerian beef suya'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
        title: 'Restaurant Interior',
        category: 'restaurant',
        description: 'Our modern dining area'
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400',
        title: 'Kitchen',
        category: 'restaurant',
        description: 'Our state-of-the-art kitchen'
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1522336579193-7e30c983b868?w=400',
        title: 'Private Dining',
        category: 'restaurant',
        description: 'Exclusive private dining area'
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400',
        title: 'Birthday Celebration',
        category: 'events',
        description: 'Birthday party celebration'
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1511799548341-02855e4b8b5a?w=400',
        title: 'Corporate Event',
        category: 'events',
        description: 'Corporate dinner event'
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
        title: 'Fried Rice Platter',
        category: 'food',
        description: 'Delicious fried rice with vegetables'
    },
    {
        id: 10,
        src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400',
        title: 'Food Presentation',
        category: 'food',
        description: 'Beautiful food presentation'
    },
    {
        id: 11,
        src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400',
        title: 'Team Building',
        category: 'events',
        description: 'Corporate team building event'
    },
    {
        id: 12,
        src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400',
        title: 'Bar Area',
        category: 'restaurant',
        description: 'Our fully stocked bar'
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
            <img src="${image.src}" alt="${image.title}" onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400'">
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
