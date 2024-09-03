const main = document.getElementById('blogPosts');

const buildBLogPost = (post) => {
    const postElement = document.createElement('article');

    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;

    const authorElement = document.createElement('p');
    authorElement.textContent = `by ${post.username}`;

    const contentElement = document.createElement('blockquote');
    contentElement.textContent = post.content;

    const dateElement = document.createElement('p');
    dateElement.textContent = new Date(post.date).toLocaleDateString();

    postElement.appendChild(titleElement);
    postElement.appendChild(authorElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(dateElement);

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

document.getElementById('back').addEventListener('click', () => { 
    redirectPage('index.html');
});

renderBlogPosts();
