const delButtonHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/favorites/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
       document.location.replace("/favorites");
      } else {
        alert("Already added to favorites!");
      }
    }
  };
  
  document
  .querySelector(".favorites-list")
  .addEventListener("click", delButtonHandler);