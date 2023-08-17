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

document
  .querySelector(".recipes-list")
  .addEventListener("click", addButtonHandler);

   