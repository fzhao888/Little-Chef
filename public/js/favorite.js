// delete button 
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/favorites/${id}`, {
        method: "DELETE",
      });

      // refresh page after deleting
      if (response.ok) {
       document.location.replace("/favorites");
      }  
    }
  };
  

  // event listener for delete button
  document
  .querySelector(".favorites-list")
  .addEventListener("click", delButtonHandler);