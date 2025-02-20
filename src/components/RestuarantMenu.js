import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SPOONACULAR_API_KEY } from '../config.js';

const RestuarantMenu = () => {
    const {resId} = useParams();

    // Mock data for development
    const mockRecipeData = {
        title: "Sample Recipe",
        readyInMinutes: 30,
        servings: 4,
        image: "https://spoonacular.com/recipeImages/sample.jpg",
        summary: "A delicious sample recipe",
        extendedIngredients: [
            { original: "2 cups rice" },
            { original: "1 chicken breast" },
            { original: "Mixed vegetables" }
        ],
        instructions: "Sample cooking instructions"
    };

    const fetchData = async () => {
        try {
            const data = await fetch(`https://api.spoonacular.com/recipes/${resId}/information?apiKey=${SPOONACULAR_API_KEY}`);
            if (!data.ok) {
                // If API limit reached, use mock data
                if (data.status === 402) {
                    console.log("Using mock data due to API limit");
                    return mockRecipeData;
                }
                throw new Error(`HTTP error! status: ${data.status}`);
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
    }, []);

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
