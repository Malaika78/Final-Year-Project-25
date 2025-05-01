import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledRestuarantPage } from "../components/RestuarantPage.styles";
import FoodItem from "../components/FoodItem/FoodItem";
const SingleRestaurant = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  async function getRestaurant() {
    const resp = await axios.get(`http://localhost:4000/api/restaurant/${id}`);
    setData(resp.data.data);
  }
  useEffect(() => {
    getRestaurant();
  }, [id]);

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
        {data?.menuItems?.map((elem, ind) => (
          <div className="menu-col" key={ind}>
            {elem?.name}
          </div>   //tabs

        ))}
      </div>
      
     
     {/* Menu Items */}
      <div className="food-display-list">
        {data?.menuItems?.map((item) => {
          return item?.items?.map((elem, ind) => (
            <FoodItem
              key={ind}
              id={elem._id}
              name={elem.name}
              description={elem.description}
              price={elem.price}
              image={elem.image}
            />
          ));
        })}
      </div>
    </StyledRestuarantPage>
  );
};

export default SingleRestaurant;
