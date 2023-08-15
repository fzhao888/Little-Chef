const addButtonHandler = async (event) => { 
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/favorites/${id}`, {
        method: "POST",
      });
  
      if (response.ok) {
        document.location.replace("/recipe");
      } else {
        alert("Failed to add favorites");
      }
    }
  };
  
  document
  .querySelector("#addFav")
  .addEventListener("click", delButtonHandler);