// Product button functionality
const buyNowButtons = document.querySelectorAll('.product-card button');

buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Show feedback
        const originalText = button.textContent;
        button.textContent = 'Processing...';
        button.style.backgroundColor = 'var(--secondary-color)';
        
        // Simulate redirect to purchase page
        setTimeout(() => {
            alert('Redirecting to purchase page...');
            button.textContent = originalText;
            button.style.backgroundColor = 'var(--primary-color)';
        }, 1000);
    });
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        // In a real application, this would trigger an API call or filter products
        alert(`Searching for: ${searchTerm}`);
    }
}

searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add hover effect to category cards
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    // Set initial state
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease-in';
});

// Category navigation functionality
const categoryItems = document.querySelectorAll('.category-item');

categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        categoryItems.forEach(i => i.style.backgroundColor = '');
        
        // Add active state to clicked item
        item.style.backgroundColor = 'rgba(255, 107, 53, 0.1)';
        
        // In a real application, this would trigger category filtering
        const category = item.querySelector('span').textContent;
        console.log(`Selected category: ${category}`);
    });
});

// Add smooth scrolling for category navigation
const categoryScroll = document.querySelector('.category-scroll');
let isScrolling = false;
let startX;
let scrollLeft;

categoryScroll.addEventListener('mousedown', (e) => {
    isScrolling = true;
    startX = e.pageX - categoryScroll.offsetLeft;
    scrollLeft = categoryScroll.scrollLeft;
});

categoryScroll.addEventListener('mouseleave', () => {
    isScrolling = false;
});

categoryScroll.addEventListener('mouseup', () => {
    isScrolling = false;
});

categoryScroll.addEventListener('mousemove', (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - categoryScroll.offsetLeft;
    const walk = (x - startX) * 2;
    categoryScroll.scrollLeft = scrollLeft - walk;
}); 