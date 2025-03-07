/* eslint-disable react/prop-types */
import { StyledMenuPage } from "./Menu.styles";
import "../List/List.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ModalContainer from "../../components/ModalContainer";
import AddMenuForm from "./AddMenuForm";
import { toast } from "react-toastify";

const Menu = ({ url }) => {
  const [menuList, setMenuList] = useState([]);
  const fetchMenu = async () => {
    try {
      const response = await axios.get(`${url}/api/menu/listmenu`);
      if (response?.data.success) {
        setMenuList(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeFood = async (id) => {
    try {
      const response = await axios.delete(`${url}/api/menu/delete/${id}`);
      if (response?.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <StyledMenuPage>
      <div className="list add flex-col">
        <div className="head">
          <p>All Menu List</p>
          <ModalContainer
            width="669"
            title="Add Menu"
            btnComponent={({ onClick }) => (
              <button onClick={onClick}>Add Menu</button>
            )}
            content={({ onClose }) => <AddMenuForm onClose={onClose} />}
          />
        </div>
        <div className="list-table">
          <div className="list-table-format-menu title">
            <b>Name</b>
            <b>Total Items</b>
            <b>Items</b>
            <b>Action</b>
          </div>
          {menuList?.map((item, index) => {
            return (
              <div key={index} className="list-table-format-menu">
                <p>{item.name}</p>
                <p>{item?.items?.length}</p>
                <select>
                  {item?.items?.map((elem, ind) => (
                    <option key={ind}>{elem.name}</option>
                  ))}
                </select>
                <p onClick={() => removeFood(item._id)} className="cursor">
                  X
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </StyledMenuPage>
  );
};

export default Menu;
