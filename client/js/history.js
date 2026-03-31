// Order History JavaScript
let orders = [];

// Initialize history when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadOrders();
    renderHistory();
});

// Load orders from localStorage
function loadOrders() {
    const savedOrders = localStorage.getItem('eazees_orders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    } else {
        // Add some sample orders for demonstration
        orders = [
            {
                id: 'EZ-2024-08765',
                items: [
                    { name: 'Grilled Chicken Peri Peri', quantity: 2, price: 4500 },
                    { name: 'Party Jollof Rice', quantity: 1, price: 2500 }
                ],
                customer: { name: 'John Doe', phone: '+2348001234567', address: '123 Lagos Street' },
                subtotal: 11500,
                deliveryFee: 0,
                total: 11500,
                status: 'delivered',
                timestamp: '2024-03-30T14:30:00Z',
                estimatedDelivery: '2024-03-30T15:15:00Z'
            },
            {
                id: 'EZ-2024-08764',
                items: [
                    { name: 'Beef Suya Special', quantity: 1, price: 3800 },
                    { name: 'Chicken Wings BBQ', quantity: 1, price: 3500 }
                ],
                customer: { name: 'John Doe', phone: '+2348001234567', address: '123 Lagos Street' },
                subtotal: 7300,
                deliveryFee: 0,
                total: 7300,
                status: 'processing',
                timestamp: '2024-03-31T12:00:00Z',
                estimatedDelivery: '2024-03-31T12:45:00Z'
            }
        ];
        localStorage.setItem('eazees_orders', JSON.stringify(orders));
    }
}

// Render order history
function renderHistory() {
    const historyContent = document.getElementById('historyContent');
    if (!historyContent) return;
    
    if (orders.length === 0) {
        historyContent.innerHTML = `
            <div class="empty-history">
                <h3>No Order History</h3>
                <p>You haven't placed any orders yet. Start ordering from our delicious menu!</p>
                <a href="menu.html" class="continue-shopping">Browse Menu</a>
            </div>
        `;
        return;
    }
    
    // Sort orders by timestamp (newest first)
    const sortedOrders = [...orders].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    historyContent.innerHTML = sortedOrders.map(order => `
        <div class="history-item">
            <div class="history-header">
                <div class="order-id">${order.id}</div>
                <div class="order-status status-${order.status}">${formatStatus(order.status)}</div>
            </div>
            <div class="order-details">
                <div class="order-items">
                    <h4>Items</h4>
                    ${order.items.map(item => `
                        <div class="order-item">
                            <span class="order-item-name">${item.name}</span>
                            <span class="order-item-quantity">x${item.quantity}</span>
                            <span class="order-item-price">₦${(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="order-info">
                    <h4>Order Info</h4>
                    <p><strong>Date:</strong> ${formatDate(order.timestamp)}</p>
                    <p><strong>Time:</strong> ${formatTime(order.timestamp)}</p>
                    <p><strong>Address:</strong> ${order.customer.address}</p>
                </div>
                <div class="order-total">
                    <h4>Total</h4>
                    <div class="total-amount">₦${order.total.toLocaleString()}</div>
                    ${order.deliveryFee === 0 ? '<p style="color: #27ae60; font-size: 0.9rem;">Free Delivery</p>' : ''}
                </div>
            </div>
            <div class="order-actions">
                ${order.status !== 'delivered' ? `<button class="action-btn track-order-btn" onclick="trackOrderById('${order.id}')">Track Order</button>` : ''}
                <button class="action-btn reorder-btn" onclick="reorderItems('${order.id}')">Reorder</button>
            </div>
        </div>
    `).join('');
}

// Format status text
function formatStatus(status) {
    const statusMap = {
        'pending': 'Order Pending',
        'processing': 'Processing',
        'out_for_delivery': 'Out for Delivery',
        'delivered': 'Delivered',
        'cancelled': 'Cancelled'
    };
    return statusMap[status] || status;
}

// Format date
function formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString('en-NG', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Format time
function formatTime(timestamp) {
    return new Date(timestamp).toLocaleTimeString('en-NG', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Track order by ID
function trackOrderById(orderId) {
    document.getElementById('trackingOrderId').value = orderId;
    trackOrder(new Event('submit'));
}

// Track order
function trackOrder(event) {
    event.preventDefault();
    
    const orderId = document.getElementById('trackingOrderId').value.trim();
    const trackingResult = document.getElementById('trackingResult');
    
    if (!orderId) {
        showToast('Please enter an order ID', 'error');
        return;
    }
    
    // Find order
    const order = orders.find(o => o.id.toLowerCase() === orderId.toLowerCase());
    
    if (!order) {
        trackingResult.style.display = 'block';
        trackingResult.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <h3 style="color: #e74c3c;">Order Not Found</h3>
                <p>No order found with ID: <strong>${orderId}</strong></p>
                <p>Please check your order ID and try again.</p>
            </div>
        `;
        return;
    }
    
    // Generate tracking timeline based on order status
    const timeline = generateTrackingTimeline(order);
    
    trackingResult.style.display = 'block';
    trackingResult.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #2c3e50; margin-bottom: 1rem;">Order Tracking: ${order.id}</h3>
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                <p><strong>Status:</strong> <span class="order-status status-${order.status}">${formatStatus(order.status)}</span></p>
                <p><strong>Estimated Delivery:</strong> ${formatDate(order.estimatedDelivery)} at ${formatTime(order.estimatedDelivery)}</p>
                <p><strong>Delivery Address:</strong> ${order.customer.address}</p>
            </div>
        </div>
        
        <h4 style="color: #2c3e50; margin-bottom: 1rem;">Delivery Timeline</h4>
        <div class="tracking-timeline">
            ${timeline.map(item => `
                <div class="timeline-item ${item.completed ? 'completed' : ''}">
                    <div class="timeline-time">${item.time}</div>
                    <div class="timeline-title">${item.title}</div>
                    <div class="timeline-description">${item.description}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// Generate tracking timeline
function generateTrackingTimeline(order) {
    const orderTime = new Date(order.timestamp);
    const timeline = [
        {
            time: formatTime(order.timestamp),
            title: 'Order Placed',
            description: 'Your order has been received and is being processed',
            completed: true
        }
    ];
    
    if (order.status === 'processing' || order.status === 'out_for_delivery' || order.status === 'delivered') {
        const processingTime = new Date(orderTime.getTime() + 10 * 60000); // 10 minutes after order
        timeline.push({
            time: formatTime(processingTime),
            title: 'Order Confirmed',
            description: 'Your order has been confirmed and is being prepared',
            completed: true
        });
    }
    
    if (order.status === 'out_for_delivery' || order.status === 'delivered') {
        const outForDeliveryTime = new Date(orderTime.getTime() + 25 * 60000); // 25 minutes after order
        timeline.push({
            time: formatTime(outForDeliveryTime),
            title: 'Out for Delivery',
            description: 'Your order is on the way to your location',
            completed: true
        });
    }
    
    if (order.status === 'delivered') {
        const deliveredTime = new Date(order.estimatedDelivery);
        timeline.push({
            time: formatTime(deliveredTime),
            title: 'Delivered',
            description: 'Your order has been successfully delivered',
            completed: true
        });
    } else {
        const estimatedTime = new Date(order.estimatedDelivery);
        timeline.push({
            time: formatTime(estimatedTime),
            title: 'Estimated Delivery',
            description: 'Your order will be delivered around this time',
            completed: false
        });
    }
    
    return timeline;
}

// Reorder items from previous order
function reorderItems(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    // Get current cart
    let cart = JSON.parse(localStorage.getItem('eazees_cart') || '[]');
    
    // Add items from previous order to cart
    order.items.forEach(orderItem => {
        const existingItem = cart.find(item => item.id === orderItem.id);
        
        if (existingItem) {
            existingItem.quantity += orderItem.quantity;
        } else {
            // Get full item details (in real app, this would come from API)
            cart.push({
                id: orderItem.id,
                name: orderItem.name,
                price: orderItem.price,
                quantity: orderItem.quantity,
                image: `https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400`
            });
        }
    });
    
    // Save cart
    localStorage.setItem('eazees_cart', JSON.stringify(cart));
    
    // Show success message
    showToast(`Items from order ${orderId} added to cart`, 'success');
    
    // Update cart count
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    
    // Redirect to cart after a delay
    setTimeout(() => {
        window.location.href = 'cart.html';
    }, 1500);
}
