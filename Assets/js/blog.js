const main = document.getElementById('blogPosts');

const buildBLogPost = (post) => {
    const postElement = document.createElement('div');
    postElement.classList.add('blogPost');

    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;

    const authorElement = document.createElement('p');
    authorElement.textContent = `by ${post.username}`;

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    postElement.appendChild(titleElement);
    postElement.appendChild(authorElement);
    postElement.appendChild(contentElement);

    main.appendChild(postElement);
};

const renderBlogPosts = () => {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if (blogPosts.length === 0) {
        main.textContent = 'No Blog Posts Available';
        return;
    }

    blogPosts.forEach(buildBLogPost);
};

