// handles login form
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();


  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/welcome');
    }else{
      const status = document.querySelector('.status-message');
      status.style.color = 'red';
      status.innerHTML = 'Incorrect password or username please try again!';
    }
  }
};

// clears status message
const clearTextHandler = async (event) => {
  const status = document.querySelector('.status-message');
  status.innerHTML = "";
}


// sends redirects to /capctha
const signUpHandler =  async (event) => {
  document.location.replace('/signup');
}

//add event listeners
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup')
  .addEventListener('click', signUpHandler);
  
  document
  .addEventListener('mousedown', clearTextHandler);
