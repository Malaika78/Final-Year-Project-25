/* eslint-disable react/prop-types */
import axios from "axios";
import { url } from "../../App";
import { useEffect, useState } from "react";
import { FormWarpper, MenuList, MenuListWarpper } from "./Menu.styles";
import { toast } from "react-toastify";

const AddMenuForm = ({ onClose }) => {
  const [menuList, setmenuList] = useState([]);
  const [selectedMenu, setselectedMenu] = useState([]);
  const [menuName, setmenuName] = useState("");
  async function FecthMenuItems() {
    try {
      const resp = await axios.get(`${url}/api/food/list`);
      if (resp?.data?.success) {
        const list = resp?.data?.data.map((elem) => ({
          ...elem,
          selected: false,
        }));
        setmenuList(list);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    FecthMenuItems();
  }, []);
  function addMenuItem(elem) {
    setselectedMenu((prev) => [...prev, elem?._id]);
    setmenuList((prev) =>
      prev.map((item) =>
        item._id === elem._id ? { ...item, selected: !item?.selected } : item
      )
    );
  }
  function removeMenuItem(elem) {
    setselectedMenu((prev) => prev.filter((item) => item !== elem._id));
    setmenuList((prev) =>
      prev.map((item) =>
        item._id === elem._id ? { ...item, selected: !item?.selected } : item
      )
    );
  }
  async function handelSubmit(e) {
    e.preventDefault();
    const payload = {
      name: menuName,
      items: selectedMenu,
    };
    try {
      const data = await axios.post(`${url}/api/menu/`, payload);
      console.log(data?.data);
      if (data?.data?.success) {
        toast.success(data?.data.message);
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <FormWarpper onSubmit={handelSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Menu Name"
        value={menuName}
        onChange={(e) => setmenuName(e.target.value)}
      />
      <MenuListWarpper>
        {menuList?.map((elem) => (
          <MenuList key={elem?._id}>
            <p>{elem?.name}</p>
            {!elem?.selected ? (
              <button type="button" onClick={() => addMenuItem(elem)}>
                Add
              </button>
            ) : (
              <button type="button" onClick={() => removeMenuItem(elem)}>
                Remove
              </button>
            )}
          </MenuList>
        ))}
        <button className="btn">ADD </button>
      </MenuListWarpper>
    </FormWarpper>
  );
};

export default AddMenuForm;
