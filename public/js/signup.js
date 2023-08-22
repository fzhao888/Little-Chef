// signs user up
const signupFormHandler = async (event) => {
  event.preventDefault();
  // retrieve user input 
  const first_name = document.querySelector('#first_name').value.trim();
  const last_name = document.querySelector('#last_name').value.trim();
  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const status = document.querySelector('.status-message');

  // input validation:
  if (first_name && last_name && username && email && password) {
    // checks if password length > 8
    if (password.length < 8) {
      status.style.color = 'red';
      status.innerHTML = "Password must be at least 8 characters long!";
      return;
    }

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, email, username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // logs user in if successful
      document.location.replace('/welcome');
    }
    else {
      // displays error message if username already exists
      status.style.color = 'red';
      status.innerHTML = "Username already exists!";
      return;
    }
  } 
};

// clears status message
const clearTextHandler = async (event) => {
  const status = document.querySelector('.status-message');
  status.innerHTML = "";
}

// adds event listeners
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

document
  .addEventListener('mousedown', clearTextHandler);