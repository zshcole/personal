// Blog view counter functionality
class BlogViewCounter {
    constructor() {
        this.storageKey = 'blog-view-counts';
        this.sessionKey = 'blog-session-views';
        this.initializeViewCounts();
    }

    // Initialize view counts from localStorage
    initializeViewCounts() {
        const stored = localStorage.getItem(this.storageKey);
        this.viewCounts = stored ? JSON.parse(stored) : {};

        // Track views for this session to avoid inflating counts
        const sessionViews = sessionStorage.getItem(this.sessionKey);
        this.sessionViews = sessionViews ? JSON.parse(sessionViews) : {};
    }

    // Get the blog post slug from the current URL
    getCurrentBlogSlug() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        return filename.replace('.html', '');
    }

    // Increment view count for a blog post
    incrementViewCount(slug) {
        // Only increment if not viewed in this session
        if (!this.sessionViews[slug]) {
            this.viewCounts[slug] = (this.viewCounts[slug] || 0) + 1;
            this.sessionViews[slug] = true;
            
            // Save to storage
            localStorage.setItem(this.storageKey, JSON.stringify(this.viewCounts));
            sessionStorage.setItem(this.sessionKey, JSON.stringify(this.sessionViews));
            
            console.log(`View count incremented for ${slug}: ${this.viewCounts[slug]}`);
        }
    }

    // Get view count for a specific blog post
    getViewCount(slug) {
        // Initialize with 0 if this is the first time we're tracking this post
        if (!(slug in this.viewCounts)) {
            this.viewCounts[slug] = 0;
        }
        return this.viewCounts[slug];
    }

    // Update the view count display on the page
    updateViewCountDisplay(slug) {
        const viewElement = document.querySelector('.post-views');
        if (viewElement) {
            const count = this.getViewCount(slug);
            viewElement.textContent = `${count} views`;
        }
    }

    // Update all view counts on blog listing page
    updateBlogListingCounts() {
        const blogPreviews = document.querySelectorAll('.blog-post-preview');

        blogPreviews.forEach(preview => {
            const link = preview.querySelector('h2 a');
            if (link) {
                const href = link.getAttribute('href');
                const slug = href.split('/').pop().replace('.html', '');
                const viewElement = preview.querySelector('.post-views');

                if (viewElement) {
                    const count = this.getViewCount(slug);
                    viewElement.textContent = `${count} views`;
                }
            }
        });
    }

    // Update view counts on main page blog preview list
    updateMainPageBlogCounts() {
        const blogPreviewItems = document.querySelectorAll('.blog-preview-item');

        blogPreviewItems.forEach(item => {
            const link = item.querySelector('h3 a');
            if (link) {
                const href = link.getAttribute('href');
                const slug = href.split('/').pop().replace('.html', '');
                const viewElement = item.querySelector('.blog-views');

                if (viewElement) {
                    const count = this.getViewCount(slug);
                    viewElement.textContent = `${count} views`;
                }
            }
        });
    }

    // Check if we're on a blog post page
    isBlogPostPage() {
        const path = window.location.pathname;
        return path.includes('/blog/') && path.endsWith('.html');
    }

    // Initialize view tracking for current page
    init() {
        const currentSlug = this.getCurrentBlogSlug();

        // If we're on a blog post page, increment and update view count
        if (currentSlug && this.isBlogPostPage()) {
            this.incrementViewCount(currentSlug);
            this.updateViewCountDisplay(currentSlug);
        }

        // If we're on the blog listing page, update all counts
        if (window.location.pathname.includes('blog.html') ||
            window.location.pathname.endsWith('/blog')) {
            this.updateBlogListingCounts();
        }

        // If we're on the main page (index.html), update blog preview counts
        if (window.location.pathname.includes('index.html') ||
            window.location.pathname === '/' ||
            window.location.pathname === '') {
            this.updateMainPageBlogCounts();
        }
    }

    // Method to reset view counts (for testing)
    resetViewCounts() {
        localStorage.removeItem(this.storageKey);
        sessionStorage.removeItem(this.sessionKey);
        this.initializeViewCounts();
        console.log('View counts reset');
    }

    // Method to get all view counts (for debugging)
    getAllViewCounts() {
        return this.viewCounts;
    }
}

// Initialize the view counter when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const viewCounter = new BlogViewCounter();
    viewCounter.init();
    
    // Make viewCounter available globally for debugging
    window.blogViewCounter = viewCounter;
    
    console.log('Blog view counter initialized');
    console.log('Current view counts:', viewCounter.getAllViewCounts());
});

// Add some visual feedback when view count updates
document.addEventListener('DOMContentLoaded', function() {
    const viewElement = document.querySelector('.post-views');
    if (viewElement) {
        // Add a subtle animation when view count updates
        viewElement.style.transition = 'color 0.3s ease';
        
        // Briefly highlight the view count
        setTimeout(() => {
            viewElement.style.color = '#007acc';
            setTimeout(() => {
                viewElement.style.color = '#666';
            }, 1000);
        }, 500);
    }
});
