import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // Normal JS Variable
  let listsOfRestaurants = [
    {
      info:{
      id: "101352",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/3fdcae9a-9614-4251-bf52-7cfe6bdeb0fa_101352.JPG",
      locality: "Bokaro Steel City",
      areaName: "Bokaro Mall",
      costForTwo: "₹350 for two",
      cuisines: ["Pizza"],
      avgRating: 3.6,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "5.1K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "38-43 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      }},
    },
    {
      info:{
      id: "101353",
      name: "MCD",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/3fdcae9a-9614-4251-bf52-7cfe6bdeb0fa_101352.JPG",
      locality: "Bokaro Steel City",
      areaName: "Bokaro Mall",
      costForTwo: "₹350 for two",
      cuisines: ["Pizza"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "5.1K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "38-43 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      }},
    },
    {
      info:{
      id: "101354",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/3fdcae9a-9614-4251-bf52-7cfe6bdeb0fa_101352.JPG",
      locality: "Bokaro Steel City",
      areaName: "Bokaro Mall",
      costForTwo: "₹350 for two",
      cuisines: ["Pizza"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "5.1K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "38-43 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      }},
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
        className="filter-btn"
          onClick={() => {
            listsOfRestaurants = listsOfRestaurants.filter(
             (res) => res.info.avgRating > 4.0
            );
            console.log(listsOfRestaurants);
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