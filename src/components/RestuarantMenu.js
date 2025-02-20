import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SPOONACULAR_API_KEY } from '../config.js';
import { mockRecipeData } from '../utils/mockData.js';
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestuarantMenu = () => {
    const {resId} = useParams();

/*     const fetchData = async () => {
        try {
            const data = await fetch(`https://api.spoonacular.com/recipes/${resId}/information?apiKey=${SPOONACULAR_API_KEY}`);
            if (!data.ok) {
                console.log("API failed, using mock data");
                return mockRecipeData;
            }
            const json = await data.json();
            return json;
        } catch (error) {
            console.error('Error fetching data:', error);
            // Return mock data in case of any error
            return mockRecipeData;
        }
    }       

    // Add state to store the recipe data
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const getRecipeData = async () => {
            const data = await fetchData();
            setRecipe(data);
        };
        getRecipeData();
    }, []); */


    const recipe = useRestaurantMenu(resId);

    return (
        <div>
           <h1>{recipe?.title || 'Loading...'}</h1>
           <h2>Recipe Details</h2>
           {recipe && (
               <div>
                   {recipe.image && <img src={recipe.image} alt={recipe.title} />}
                   <p>Cooking Time: {recipe.readyInMinutes} minutes</p>
                   <p>Servings: {recipe.servings}</p>
                   <h3>Ingredients:</h3>
                   <ul>
                       {recipe.extendedIngredients?.map((ingredient, index) => (
                           <li key={index}>{ingredient.original}</li>
                       ))}
                   </ul>
                   <h3>Instructions:</h3>
                   <p>{recipe.instructions}</p>
               </div>
           )}
        </div>
    )
}

export default RestuarantMenu;
