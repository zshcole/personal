// Blog post data
const blogPosts = [
  {
    title: "the future of headless commerce",
    date: "june 15, 2025",
    category: "e-commerce",
    excerpt: "exploring how headless architecture is transforming the e-commerce landscape and why traditional platforms are struggling to keep up...",
    url: "posts/2025/06-june/headless-commerce.html"
  },
  {
    title: "advanced react patterns i use daily",
    date: "may 28, 2025",
    category: "development",
    excerpt: "a deep dive into the compound component pattern, render props, and how these approaches have improved code maintainability on our team...",
    url: "posts/2025/05-may/react-patterns.html"
  },
  {
    title: "web performance optimization techniques",
    date: "april 10, 2025",
    category: "performance",
    excerpt: "how we reduced page load times by 30% through a combination of code splitting, lazy loading, and strategic caching strategies...",
    url: "posts/2025/04-april/performance-optimization.html"
  }
];

// Function to render blog posts
function renderBlogPosts() {
  const blogListElement = document.querySelector('.blog-list');
  
  // If blog list container doesn't exist, exit
  if (!blogListElement) return;
  
  // Clear any existing content after the heading
  const heading = blogListElement.querySelector('h2');
  if (heading) {
    while (heading.nextElementSibling) {
      heading.nextElementSibling.remove();
    }
  }
  
  // Render each blog post
  blogPosts.forEach(post => {
    const article = document.createElement('article');
    article.className = 'blog-preview';
    
    article.innerHTML = `
      <h3><a href="${post.url}">${post.title}</a></h3>
      <div class="post-meta">
        <span class="post-date">${post.date}</span>
        <span class="post-category">${post.category}</span>
      </div>
      <p class="post-excerpt">
        ${post.excerpt}
      </p>
      <a href="${post.url}" class="read-more">read more</a>
    `;
    
    blogListElement.appendChild(article);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderBlogPosts);