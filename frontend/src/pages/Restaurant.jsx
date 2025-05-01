import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledRestuarantPage } from "../components/RestuarantPage.styles";
import FoodItem from "../components/FoodItem/FoodItem";
import FeedbackSection from "../components/Feedback/FeedbackSection";

const SingleRestaurant = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0); // default to first category

  useEffect(() => {
    async function getRestaurant() {
      const resp = await axios.get(
        `http://localhost:4000/api/restaurant/${id}`
      );
      setData(resp.data.data);
    }
    getRestaurant();
  }, [id]);

  const selectedMenu = data?.menuItems?.[selectedMenuIndex];

  return (
    <StyledRestuarantPage $image={data?.image}>
      <div className="image-wrap">
        <h1>{data?.name}</h1>
        <p>{data?.description}</p>
        <span className="total-menu">
          Total Menus {data?.menuItems?.length} in Restaurant
        </span>
      </div>

      <div className="menu-wraper">
        {data?.menuItems?.map((menu, index) => (
          <div
            className={`menu-col ${
              index === selectedMenuIndex ? "active" : ""
            }`}
            key={index}
            onClick={() => setSelectedMenuIndex(index)}
            style={{
              cursor: "pointer",
              fontWeight: index === selectedMenuIndex ? "bold" : "normal",
            }}
          >
            {menu?.name}
          </div>
        ))}
      </div>

      <div className="food-display-list">
        {selectedMenu?.items?.length > 0 ? (
          selectedMenu.items.map((item, ind) => (
            <FoodItem
              key={ind}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>No food items in this category.</p>
        )}
      </div>
      <FeedbackSection restaurantId={id} />
    </StyledRestuarantPage>
  );
};

export default SingleRestaurant;
