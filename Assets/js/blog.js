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

}