
import { useState, useEffect } from "react";
import { SPOONACULAR_API_KEY } from '../config.js';
import { mockRecipeData } from './mockData.js';

const useRestaurantMenu = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
       fetchData();
    }, []);
    
    const fetchData = async () => {
        try {
            const data = await fetch(`https://api.spoonacular.com/recipes/${resId}/information?apiKey=${SPOONACULAR_API_KEY}`);
            if (!data.ok) {
                console.log("API failed, using mock data");
                setRestaurantInfo(mockRecipeData);
                return mockRecipeData;
            }
            const json = await data.json();
            setRestaurantInfo(json);
            return json;

        } catch (error) {
            console.error('Error fetching data:', error);
            setRestaurantInfo(mockRecipeData);
            return mockRecipeData;
        }
    }  
    return restaurantInfo;
}

export default useRestaurantMenu;   