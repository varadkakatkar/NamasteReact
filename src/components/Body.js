import { SPOONACULAR_API_KEY } from '../config.js';
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    console.log("body rendered");
    useEffect(() => {
        getRestaurants();
    }, []);
  
    const getRestaurants = async () => {
        try {
            // Add debug logs
            console.log("Environment variables:", process.env);
            console.log("API Key in component:", SPOONACULAR_API_KEY);
            
            if (!SPOONACULAR_API_KEY) {
                throw new Error('API key not found. Please check your environment variables.');
            }

            const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}&cuisine=indian&number=12&addRecipeInformation=true`;
            console.log("Requesting URL:", url); // Debug log
            
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'API request failed');
            }
            
            const json = await response.json();
            console.log("API Response:", json); // Debug log
            
            const formattedData = json.results.map(item => ({
                id: item.id,
                image: item.image,
                name: item.title,
                cuisine: item.cuisines?.join(", ") || "Various",
                rating: (item.spoonacularScore / 20).toFixed(1),
                deliveryTime: `${Math.floor(Math.random() * 60 + 20)} minutes`
            }));
            
            setListOfRestaurants(formattedData);
            setFilteredList(formattedData);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
            setListOfRestaurants(restaurantList);
        }
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search for restaurants" value={searchInput} onChange={(e) => {
                    setSearchInput(e.target.value);
                }}/>

                <button className="search-btn" onClick={() => {
                    console.log("clicked");
                    const filteredList = listOfRestaurants.filter((res) => res.name.toLowerCase().includes(searchInput.toLowerCase()));
                    setFilteredList(filteredList);
                }}>Search</button>
                <button className="top-rated-btn" onClick={() => {
                    console.log("clicked");
                    const filteredList = listOfRestaurants.filter((res) => res.rating >= 4.7);
                    setFilteredList(filteredList);
                }}>Top Rated Restaurants</button>
                <button className="reset-btn" onClick={() => {
                    setFilteredList(listOfRestaurants);
                }}>Reset</button>

            </div>
            <div className="restaurant-container">
               
                {filteredList.map((restaurant) => (
                    <RestaurantCard resData={restaurant} key={restaurant.id} />
                ))}
            </div>
        </div>
    )
}

export default Body;
