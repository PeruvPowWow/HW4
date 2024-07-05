// TODO: Create a variable that selects the form element

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
const form = document.getElementByID ('blogForm');

const handleFormSubmit = (event) => {
  event.preventDefault();

  const userName = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementByID('content').value;
  const errorMessage = document.getElementByID('errorMessage');
  
  if (!username || !title || !content) {
    errorMessage.textContent = 'Please complete the form before submitting.';
    return;
  }

  const blogPost = { username, title, content };
  let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  blogPosts.push(blogPost);
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

  redirectPage('blog.html');
};

form.addEventListener('submit', handleFormSubmit);

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};


