/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import "../Add/Add.css";
import { FormWarpper, MenuList, MenuListWarpper } from "../Menu/Menu.styles";
import { url } from "../../App";

const AddRestaurant = () => {
  const [menuList, setmenuList] = useState([]);
  const [selectedMenu, setselectedMenu] = useState([]);
  const [data, setData] = useState({
    name: "",
    description: "",
    image: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  async function FecthMenuItems() {
    try {
      const resp = await axios.get(`${url}/api/menu/listmenu`);
      if (resp?.data?.success) {
        const list = resp?.data?.data.map((elem) => ({
          ...elem,
          selected: false,
        }));
        setmenuList(list);
        console.log("list");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function handelFileUpload(e) {
    const data = new FormData();
    data.append("file", e);
    data.append("upload_preset", "xlcfm5dy"); // Use your actual Cloudinary upload preset

    try {
      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/dpovwota8/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const cloudinaryData = await cloudinaryResponse.json();

      if (cloudinaryData.secure_url) {
        const imageUrl = cloudinaryData.secure_url; // Get the uploaded image URL
        console.log("Image uploaded:", imageUrl);
        setData((prev) => ({ ...prev, image: imageUrl }));
      }
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
    }
  }
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const payload = {
      name: data?.name,
      description: data?.description,
      menuItems: selectedMenu,
      image: data?.image,
    };

    console.log(payload);

    try {
      const response = await axios.post(
        `${url}/api/restaurant/add-restaurant`,
        payload
      );
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          image: "",
          menuItems: [],
        });
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };
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
  return (
    <FormWarpper className="flex-col" onSubmit={onSubmitHandler}>
      <div className="add-img-upload flex-col">
        <p>Upload Restaurant Image</p>
        <label htmlFor="image">
          <img src={data?.image ? data?.image : assets.upload_area} alt="" />
        </label>
        <input
          onChange={(e) => handelFileUpload(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
      </div>
      <div className=" flex-col">
        <p>Name</p>
        <input
          onChange={onChangeHandler}
          value={data.name}
          type="text"
          name="name"
          placeholder="Type Here"
        />
      </div>
      <div className="flex-col">
        <p>Description</p>
        <textarea
          onChange={onChangeHandler}
          value={data.description}
          name="description"
          rows="6"
          placeholder="Write content here"
          required
        ></textarea>
      </div>
      <div className="add-category flex-col">
        <p>Menu</p>
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
        </MenuListWarpper>
      </div>
      <button type="submit" className="add-btn">
        ADD
      </button>
    </FormWarpper>
  );
};

export default AddRestaurant;
