const router = require('express').Router()
const axios = require('axios');
const { Recipe } = require('../../models');
router.get('/:search',(req, res) => {
    let RecipeApi = {
        apikey: "5f33990743164a6b8e9d60bb68029756",
        searchHistory: []
    }
        console.log( "https://api.spoonacular.com/food/products/search?query="+req.params.search+"&apiKey=" 
        + RecipeApi.apiKey)
            axios(
                "https://api.spoonacular.com/food/products/search?query="+req.params.search+"&apiKey=" 
                + RecipeApi.apiKey
            )
                .then((data) => res.json(data))
                .catch((error) => console.error(error));
    
})
module.exports= router