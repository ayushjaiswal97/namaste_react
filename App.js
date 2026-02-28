import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * ->LOGO
 * ->NavItems
 * Body
 * ->Search
 * ->Restaurant Container
 * -->Restaurant Card
 * ---> Name of res, Star rating, cuisine, delivery time
 * Footer
 * ->Copyright
 * ->Links(social media)
 * ->Address
 * ->Contact
 */

// Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div
      className="res-card"
      style={{ backgroundColor: "#f0f0f0", padding: "10px", margin: "10px" }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        style={{ width: "100%" }}
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "101352",
      name: "Pizza Hut",
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
      },
      availability: {
        nextCloseTime: "2026-02-27 18:52:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹110",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d4d60c4b-960a-4467-ad67-48e27bd69213",
    },
    cta: {
      link: "https://www.swiggy.com/city/bokaro/pizza-hut-steel-city-bokaro-mall-rest101352",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "125468",
      name: "Kaka Chicken Biryani",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/26/0ac9af96-94bf-46e4-9d42-a07fd2ccc363_125468.jpg",
      locality: "Sector 3C",
      areaName: "City Center",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani"],
      avgRating: 4,
      parentId: "113665",
      avgRatingString: "4.0",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-27 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d4d60c4b-960a-4467-ad67-48e27bd69213",
    },
    cta: {
      link: "https://www.swiggy.com/city/bokaro/kaka-chicken-biryani-sector-3c-city-center-rest125468",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "103731",
      name: "Mansarovar Sweets",
      cloudinaryImageId: "zlbg7ordvuiyavvqrfho",
      locality: "City Centre",
      areaName: "City Centre",
      costForTwo: "₹250 for two",
      cuisines: ["Sweets", "South Indian", "Tandoor", "Chaat", "Chinese"],
      avgRating: 4.3,
      parentId: "132287",
      avgRatingString: "4.3",
      totalRatingsString: "14K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-27 21:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Mithai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mithai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d4d60c4b-960a-4467-ad67-48e27bd69213",
    },
    cta: {
      link: "https://www.swiggy.com/city/bokaro/mansarovar-sweets-city-centre-rest103731",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "610471",
      name: "Hitchki Thela",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/22/0d5dcac3-749a-46c3-a4cb-897f05558c76_610471.jpg",
      locality: "Sector-4",
      areaName: "City Center",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "rolls", "Momos", "Indian", "Tandoor"],
      avgRating: 4.3,
      parentId: "96206",
      avgRatingString: "4.3",
      totalRatingsString: "3.0K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "30-40 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-27 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
        headerTypeV2: "HEADER_TYPE_V2_TOP_UP",
        secondaryDiscountCallout: "₹30 Cashback",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d4d60c4b-960a-4467-ad67-48e27bd69213",
    },
    cta: {
      link: "https://www.swiggy.com/city/bokaro/hitchki-thela-sector-4-city-center-rest610471",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "699421",
      name: "Wow! Momo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/b28e4a53-1d77-4f15-af9b-f5b9eb0e0771_699421.JPG",
      locality: "Sector 3",
      areaName: "Bokaro Mall",
      costForTwo: "₹300 for two",
      cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
      avgRating: 4.4,
      parentId: "1776",
      avgRatingString: "4.4",
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-27 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Chinese.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Chinese.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "65% OFF",
        subHeader: "UPTO ₹125",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d4d60c4b-960a-4467-ad67-48e27bd69213",
    },
    cta: {
      link: "https://www.swiggy.com/city/bokaro/wow-momo-sector-3-bokaro-mall-rest699421",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "401864",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "wqvhjjou83ifdmgvjbx4",
      locality: "City Centre",
      areaName: "Sector 4",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.4,
      parentId: "4961",
      avgRatingString: "4.4",
      totalRatingsString: "3.4K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d4d60c4b-960a-4467-ad67-48e27bd69213",
    },
    cta: {
      link: "https://www.swiggy.com/city/bokaro/la-pinoz-pizza-city-centre-sector-4-rest401864",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "1195221",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/4/9dfe957c-f44b-47a7-85cb-cf29bf34d6e2_1195221.jpg",
      locality: "B S CITY BOKARO STEEL CITY",
      areaName: "BOKARO",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.7,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.7",
      totalRatingsString: "118",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d4d60c4b-960a-4467-ad67-48e27bd69213",
    },
    cta: {
      link: "https://www.swiggy.com/city/bokaro/the-belgian-waffle-co-b-s-city-steel-city-bokaro-rest1195221",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "981768",
      name: "Wow! Chicken By Wow! Momo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/25/787b9f05-c567-495b-bc61-43cd3bd89c08_981768.jpg",
      locality: "Bokaro, Steel City",
      areaName: "Bokaro Mall",
      costForTwo: "₹400 for two",
      cuisines: ["Burger", "Biryani", "American", "fastfood"],
      avgRating: 4.2,
      parentId: "268366",
      avgRatingString: "4.2",
      totalRatingsString: "622",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-02-27 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "65% OFF",
        subHeader: "UPTO ₹125",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d4d60c4b-960a-4467-ad67-48e27bd69213",
    },
    cta: {
      link: "https://www.swiggy.com/city/bokaro/wow-chicken-by-wow-momo-steel-city-bokaro-mall-rest981768",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

//Body
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData ={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
