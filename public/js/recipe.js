const addButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);
    const response = await fetch(`/api/favorites/${id}`, {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const status = document.querySelector('.status-message');
    if (response.ok) {
      // PUT here
      status.style.color = 'green';
      status.innerHTML = "added to favorite";
    } else {
      // display to dom or modal
      status.style.color = 'red';
      status.innerHTML = "Failed to add to favorite";
    }
  }
};


const topButtonHandler = async (event) => {  
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document
  .querySelector(".recipes-list")
  .addEventListener("click", addButtonHandler);

document
  .querySelector("#topBtn")
  .addEventListener("click", topButtonHandler);

