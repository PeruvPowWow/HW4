const form = document.getElementById ('blogForm');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', function(event) {
  event.preventDefault();


  const userName = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
 
  if (!username || !title || !content) {
    errorDiv.textContent = 'Please complete the form before submitting.';
    return;
  }

  const blogPost = { username, title, content, date: new Date().toISOString() };

  let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  blogPosts.push(blogPost);
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

  redirectPage('blog.html');
});



