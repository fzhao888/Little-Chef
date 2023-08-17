const signupFormHandler = async (event) => {
    event.preventDefault(); 

    const first_name = document.querySelector('#first_name').value.trim();
    const last_name = document.querySelector('#last_name').value.trim();
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const status = document.querySelector('.status-message');

    if (first_name && last_name && username && email && password) {
      if(password.length < 8){
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
        document.location.replace('/welcome');
      }  
    }
  };

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
