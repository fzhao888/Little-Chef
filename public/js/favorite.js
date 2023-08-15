const delButtonHandler = async (event) => { 
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/favorites/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        document.location.replace("/favorite");
      } else {
        alert("Failed to delete favorites");
      }
    }
  };
  
  document
  .querySelector("#delFav")
  .addEventListener("click", delButtonHandler);