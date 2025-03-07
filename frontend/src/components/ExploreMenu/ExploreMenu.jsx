import "./ExploreMenu.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ExploreMenu = () => {
  const navigate = useNavigate();
  const [menuList, setMenuList] = useState([]);
  const url = "http://localhost:4000";

  const fetchMenu = async () => {
    try {
      const response = await axios.get(`${url}/api/restaurant`);
      if (response?.data.success) {
        setMenuList(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Restaurant </h1>
      <p className="explore-menu=text" >
      Discover a world of flavors with our on-demand food delivery app! 
      Browse through a wide range of restaurants, from local favorites to top-rated eateries,
       all at your fingertips. Enjoy a seamless ordering experience, explore diverse cuisines, 
      and get your favorite meals delivered to your doorstep—fresh, fast, and hassle-free.
      </p>
      <div className="explore-menu-list">
        {menuList?.map((item, index) => {
          return (
            <div
              key={index}
              className="explore-menu-list-item"
              onClick={() => navigate(`/restaurant/${item?._id}`)}
            >
              <div className="image-wrapper">
                <img src={item.image} alt="" width={250} height={121} />
              </div>
              <strong>{item.name}</strong>
              <p className="two-line-text">{item?.description}</p>
              <p>Total menu {item?.menuItems?.length}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
