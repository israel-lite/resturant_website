// FAQ JavaScript
const faqData = [
    {
        id: 1,
        category: 'ordering',
        question: 'How do I place an order?',
        answer: 'You can place an order through our website by browsing the menu, selecting items, adding them to your cart, and proceeding to checkout. You can also call us directly at +234 800 123 4567.'
    },
    {
        id: 2,
        category: 'ordering',
        question: 'Can I customize my order?',
        answer: 'Yes! You can add special instructions when placing your order. Whether you need extra spice, less salt, or have dietary restrictions, we\'ll accommodate your preferences.'
    },
    {
        id: 3,
        category: 'ordering',
        question: 'Do you offer bulk ordering for events?',
        answer: 'Absolutely! We provide catering services for events, parties, and corporate functions. Contact us at least 24 hours in advance for bulk orders.'
    },
    {
        id: 4,
        category: 'delivery',
        question: 'How long does delivery take?',
        answer: 'Delivery typically takes 30-45 minutes depending on your location and order size. You\'ll receive real-time tracking updates once your order is confirmed.'
    },
    {
        id: 5,
        category: 'delivery',
        question: 'What areas do you deliver to?',
        answer: 'We currently deliver to all major cities in Nigeria including Lagos, Abuja, Port Harcourt, Kano, and Ibadan. Enter your address during checkout to confirm delivery availability.'
    },
    {
        id: 6,
        category: 'delivery',
        question: 'How do I track my order?',
        answer: 'After placing your order, you\'ll receive a tracking link via SMS. You can also track your order on our website using your order ID in the Order History section.'
    },
    {
        id: 7,
        category: 'delivery',
        question: 'Is there a delivery fee?',
        answer: 'Delivery is free for orders above ₦5,000. For orders below this amount, a small delivery fee of ₦200 applies within our delivery zones.'
    },
    {
        id: 8,
        category: 'payment',
        question: 'What payment methods do you accept?',
        answer: 'We accept cash on delivery, bank transfers, and all major debit/credit cards. Payment is made upon delivery for your convenience.'
    },
    {
        id: 9,
        category: 'payment',
        question: 'Can I pay online?',
        answer: 'Yes, we offer secure online payment options including card payments and bank transfers. You can choose your preferred payment method at checkout.'
    },
    {
        id: 10,
        category: 'payment',
        question: 'Do you offer refunds?',
        answer: 'We offer refunds for orders that are incorrect or damaged. Please contact us within 30 minutes of delivery to report any issues.'
    },
    {
        id: 11,
        category: 'food',
        question: 'Are your ingredients fresh?',
        answer: 'Yes, we use only fresh, high-quality ingredients sourced from trusted suppliers. Our food is prepared daily to ensure maximum freshness.'
    },
    {
        id: 12,
        category: 'food',
        question: 'Do you have vegetarian options?',
        answer: 'Yes, we offer a variety of vegetarian dishes including vegetable fried rice, salads, and plant-based options. Check our menu for vegetarian choices.'
    },
    {
        id: 13,
        category: 'food',
        question: 'Can I order for special dietary requirements?',
        answer: 'Yes, we can accommodate various dietary requirements including gluten-free, low-sodium, and other special dietary needs. Please specify your requirements when ordering.'
    },
    {
        id: 14,
        category: 'ordering',
        question: 'What are your operating hours?',
        answer: 'We\'re open Monday-Friday: 8:00 AM - 11:00 PM, Saturday-Sunday: 9:00 AM - 12:00 AM, and Holidays: 10:00 AM - 10:00 PM.'
    },
    {
        id: 15,
        category: 'delivery',
        question: 'Can I schedule a delivery for later?',
        answer: 'Yes, you can schedule deliveries up to 24 hours in advance. Simply select your preferred delivery time during checkout.'
    }
];

let currentCategory = 'all';

// Initialize FAQ when page loads
document.addEventListener('DOMContentLoaded', function() {
    renderFAQ();
});

// Render FAQ items
function renderFAQ() {
    const faqContainer = document.getElementById('faqContainer');
    if (!faqContainer) return;
    
    const filteredFAQs = currentCategory === 'all' 
        ? faqData 
        : faqData.filter(item => item.category === currentCategory);
    
    faqContainer.innerHTML = filteredFAQs.map(faq => `
        <div class="faq-item" id="faq-${faq.id}">
            <div class="faq-question" onclick="toggleFAQ(${faq.id})">
                <h3>${faq.question}</h3>
                <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
}

// Filter FAQ by category
function filterFAQ(category) {
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderFAQ();
}

// Toggle FAQ item
function toggleFAQ(id) {
    const faqItem = document.getElementById(`faq-${id}`);
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

// Search functionality (optional enhancement)
function searchFAQ() {
    const searchTerm = document.getElementById('faqSearch')?.value.toLowerCase();
    if (!searchTerm) {
        renderFAQ();
        return;
    }
    
    const filteredFAQs = faqData.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm) ||
        faq.answer.toLowerCase().includes(searchTerm)
    );
    
    const faqContainer = document.getElementById('faqContainer');
    if (faqContainer) {
        if (filteredFAQs.length === 0) {
            faqContainer.innerHTML = '<p style="text-align: center; color: #666;">No FAQs found matching your search.</p>';
        } else {
            faqContainer.innerHTML = filteredFAQs.map(faq => `
                <div class="faq-item" id="faq-${faq.id}">
                    <div class="faq-question" onclick="toggleFAQ(${faq.id})">
                        <h3>${faq.question}</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>${faq.answer}</p>
                    </div>
                </div>
            `).join('');
        }
    }
}
