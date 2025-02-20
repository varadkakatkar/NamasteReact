const RestaurantCard = (props) => {
    const {resData} = props;
     const {name, cuisine, rating, deliveryTime, image} = resData;
     return (
         <div className="restaurant-card">
             <img src={image} alt="restaurant" />
             <h2>{name}</h2>
             <h3>Food Type: {cuisine}</h3>
             <p>Rating: {rating}</p>
             <p>Delivery Time: {deliveryTime}</p>
         </div>
     )
 }

 export default RestaurantCard;