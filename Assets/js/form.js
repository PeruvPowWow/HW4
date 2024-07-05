// TODO: Create a variable that selects the form element

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
const form = document.getElementByID ('blogForm');
const errorDiv = document.getElementByID('error');

form.addEventListener('submit', function(event) {
  event.preventDefault();


  const userName = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementByID('content').value;
  const errorMessage = document.getElementByID('errorMessage');
  
  if (!username || !title || !content) {
    errorMessage.textContent = 'Please complete the form before submitting.';
    return;
  }

  const blogPost = { username, title, content, date: new Date().toISOString() };

  let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  blogPosts.push(blogPost);
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

  redirectPage('blog.html');
});

const redirectPage = function (url) {
  location.assign(url);
};

const toggleButton = document.getElementById('toggle');
const body = document.body;

toggleButton.addEventListener('click', function() {
  body.classList.toggle9('dark');
  const mode = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('mode', mode);
});

window.addEventListener('DOMContentLoaded', (event) => {
  const savedMode = localStorage.getItem('mode') || 'light';
  body.classList.add(savedMode);
});



