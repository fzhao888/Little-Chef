 
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#ingredient-name').value.trim();
  
    if (name) {
      const response = await fetch(`/api/ingredients`, {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to add ingredient');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/ingredients/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete ingredient');
      }
    }
  };
  
  document
    .querySelector('.new-ingredients-list-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.ingredients-list')
    .addEventListener('click', delButtonHandler);
  