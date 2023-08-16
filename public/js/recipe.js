const addButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/favorites/${id}`, {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // PUT here
      console.log("added to favorite");
    } else {
      // display to dom or modal
      alert("Failed to add favorites");
    }
  }
};

document
  .querySelector(".recipes-list")
  .addEventListener("click", addButtonHandler);

   