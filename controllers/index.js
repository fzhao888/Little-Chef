let RecipeApi = {
    apikey: "5f33990743164a6b8e9d60bb68029756",
    searchHistory: [],
    fetchRecipe: function () {
        fetch(
            "https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY" 
            + this.apiKey
        )
            .then((Response) => response.json())
            .then((data) => this.displayRecipeApi(data))
            .catch((error) => console.error(error));
    }
}