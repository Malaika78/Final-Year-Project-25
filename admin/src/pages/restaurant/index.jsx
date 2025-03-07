/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ModalContainer from "../../components/ModalContainer";
import { StyledMenuPage } from "../Menu/Menu.styles";
import axios from "axios";
import AddRestaurant from "./AddRestaurant";

const Restaurant = ({ url }) => {
  const [menuList, setMenuList] = useState([]);
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
    <StyledMenuPage>
      <div className="list add flex-col">
        <div className="head">
          <p>All Restaurant </p>
          <ModalContainer
            width="669"
            title="Add Restaurant"
            btnComponent={({ onClick }) => (
              <button onClick={onClick}>Add Restaurant</button>
            )}
            content={({ onClose }) => <AddRestaurant onClose={onClose} />}
          />
        </div>
        <div className="list-table">
          <div className="list-table-format-menu list-table-format-menus title">
            <b>Image</b>
            <b>Name</b>
            <b>Total Menu</b>
          </div>
          {menuList?.map((item, index) => {
            return (
              <div
                key={index}
                className="list-table-format-menu list-table-format-menus"
              >
                <img src={item?.image} alt="restaurant-img" width={100} />
                <p>{item.name}</p>
                <p>{item?.menuItems?.length}</p>
              </div>
            );
          })}
        </div>
      </div>
    </StyledMenuPage>
  );
};

export default Restaurant;
