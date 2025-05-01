import React, { useState, useContext } from "react";

import { StoreContext } from "../../components/context/StoreContext.jsx";

import "./SearchScreen.css";
import FoodItem from "../../components/FoodItem/FoodItem.jsx";
import { useNavigate } from "react-router-dom";

const SearchScreen = () => {
  const navigate = useNavigate();
  const { food_list, menuList, cartItems, addToCart, removeFromCart } =
    useContext(StoreContext); // assuming you have these in context
  const [query, setQuery] = useState("");
  const filteredFoods = food_list?.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredRestaurants = menuList?.filter((rest) =>
    rest.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-screen">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search for food or restaurants..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="search-results">
        {query && (
          <>
            <h3>Restaurants</h3>
            <div className="results-list">
              {filteredRestaurants.length ? (
                filteredRestaurants.map((rest, i) => (
                  <div
                    className="result-card"
                    key={i}
                    onClick={() => navigate(`/restaurant/${rest?._id}`)}
                  >
                    <img src={rest.image} alt={rest.name} />
                    <p>{rest.name}</p>
                  </div>
                ))
              ) : (
                <p>No matching restaurants</p>
              )}
            </div>
            <h3>Top dishes</h3>
            <div className="food-display-list">
              {filteredFoods.length ? (
                filteredFoods.map((item, index) => (
                  <FoodItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                ))
              ) : (
                <p>No matching food items</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchScreen;
