// Sample product data structure
const products = {
    men: [
        { id: 1, name: 'Classic White Shirt', price: 49.99, image: 'https://via.placeholder.com/300x400', category: 'men' },
        { id: 2, name: 'Slim Fit Jeans', price: 69.99, image: 'https://via.placeholder.com/300x400', category: 'men' },
        // Add more products as needed
    ],
    women: [
        { id: 1, name: 'Floral Summer Dress', price: 79.99, image: 'https://via.placeholder.com/300x400', category: 'women' },
        { id: 2, name: 'High-Waist Pants', price: 59.99, image: 'https://via.placeholder.com/300x400', category: 'women' },
        // Add more products as needed
    ],
    accessories: [
        { id: 1, name: 'Leather Belt', price: 29.99, image: 'https://via.placeholder.com/300x400', category: 'accessories' },
        { id: 2, name: 'Silver Necklace', price: 39.99, image: 'https://via.placeholder.com/300x400', category: 'accessories' },
        // Add more products as needed
    ],
    electronics: [
        { id: 1, name: 'Wireless Earbuds', price: 129.99, image: 'https://via.placeholder.com/300x400', category: 'electronics' },
        { id: 2, name: 'Smartwatch', price: 199.99, image: 'https://via.placeholder.com/300x400', category: 'electronics' },
        // Add more products as needed
    ]
};

// Get current category from URL
function getCurrentCategory() {
    const path = window.location.pathname;
    return path.split('/').pop().replace('.html', '');
}

// Filter and sort products
function filterAndSortProducts() {
    const category = getCurrentCategory();
    let filteredProducts = [...products[category]];
    
    // Get filter values
    const priceFilter = document.getElementById('price-filter').value;
    const sortBy = document.getElementById('sort-by').value;

    // Apply price filter
    if (priceFilter !== 'all') {
        const [min, max] = priceFilter.split('-').map(Number);
        filteredProducts = filteredProducts.filter(product => 
            product.price >= min && (max ? product.price <= max : true)
        );
    }

    // Apply sorting
    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }

    return filteredProducts;
}

// Render products
function renderProducts() {
    const filteredProducts = filterAndSortProducts();
    const productGrid = document.querySelector('.category-grid');
    const productCount = document.querySelector('.product-count');

    // Update product count
    productCount.textContent = `${filteredProducts.length} products found`;

    // Clear existing products
    productGrid.innerHTML = '';

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<div class="no-products">No products found matching your criteria</div>';
        return;
    }

    // Render products
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Initialize page
function initializePage() {
    // Add event listeners to filters
    document.getElementById('price-filter').addEventListener('change', renderProducts);
    document.getElementById('sort-by').addEventListener('change', renderProducts);

    // Initial render
    renderProducts();
}

// Add to cart functionality (to be implemented)
function addToCart(productId) {
    console.log(`Added product ${productId} to cart`);
    // Implement cart functionality
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage); 