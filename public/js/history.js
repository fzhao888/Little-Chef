// add to favorites
const addButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/favorites/history/${id}`, {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const status = document.querySelector('.status-message');
    if (response.ok) {
      // success message
      status.style.color = 'green';
      status.innerHTML = "Added to favorites!";
     
    } else {
      // display to dom 
      status.style.color = 'red';
      status.innerHTML = "Already added to favorites!";  
    }
  }
}; 

// goes to top
const topButtonHandler = async (event) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// clears status message
const clearTextHandler = async (event) => {
  const status = document.querySelector('.status-message');
  status.innerHTML = "";
}

const clearButtonHandler = async(event) => {
  const response = await fetch(`api/history`, {
    method: 'DELETE',
  });
 
  if(response.ok){
    document.location.replace('/history');
  }
}

// event listeners for add button, go to top, clear text 
document
  .querySelector(".histories-list")
  .addEventListener("click", addButtonHandler);

document
  .querySelector("#topBtn")
  .addEventListener("click", topButtonHandler);

  document
  .querySelector("#clearBtn")
  .addEventListener("click", clearButtonHandler);

  document
  .addEventListener('mousedown', clearTextHandler);
