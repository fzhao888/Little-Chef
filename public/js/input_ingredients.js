// Adds ingredient to form
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#ingredient-name").value.trim();
  
  if (name) {
    const response = await fetch(`/api/ingredients`, {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) { 
      // refresh if successful
      document.location.replace("/input"); 
    } else {
      // displays status message if not successful => ingredient already exists
      const status = document.querySelector('.status-message');
      status.style.color = 'red';
      status.innerHTML = 'Ingredient already added!';
    }
  }
};

// delete ingredient from form
const delButtonHandler = async (event) => { 
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/ingredients/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
        // refresh if successful
      document.location.replace("/input");
    } else {
      // displays status message if not successful => ingredient already exists
      const status = document.querySelector('.status-message');
      status.style.color = 'red';
      status.innerHTML = 'Failed to delete ingredient.'
    }
  }
};

// find new recipe button
const findRecipesHandler = async (event) => { 
  const response = await fetch(`/api/recipes`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  if (response.ok) {
    document.location.replace("/recipe");
  } else {
    const status = document.querySelector('.status-message');
    status.style.color = 'red';
    status.innerHTML = "Failed to find recipe";
  }
};

// event listeners for add ingredient, delete ingredient, and find new recipes button
document
  .querySelector(".new-ingredients-list-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".ingredients-list")
  .addEventListener("click", delButtonHandler);

document
  .querySelector("#find-recipes")
  .addEventListener("click", findRecipesHandler);
