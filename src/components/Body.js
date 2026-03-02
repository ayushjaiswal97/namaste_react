import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
   
   // Local State variable => Super powerful variable
   let [listsOfRestaurants, setListsOfRestaurants] = useState([]);

   useEffect(() => {
    fetchData();
   },[]);

   const fetchData = async () =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.692664&lng=86.1661311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optational Chaining
    setListsOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }



  return (
    <div className="body">
      <div className="filter">
        <button
        className="filter-btn"
          onClick={() => {
            const filteredList = listsOfRestaurants.filter(
             (res) => res.info.avgRating > 4.5
            );
            console.log(filteredList);
            setListsOfRestaurants(filteredList);
          }}
          >Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listsOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;