import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
   
   // Local State variable => Super powerful variable
   let [listsOfRestaurants, setListsOfRestaurants] = useState(resList);

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