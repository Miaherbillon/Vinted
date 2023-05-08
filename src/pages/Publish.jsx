import axios from "axios";
import { useState } from "react";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState("");
  const [imgFromCloudinary, setImgFromCloudinary] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `bearer${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setImgFromCloudinary(response.data.secure_url);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="publish">
      <form onSubmit={handleSubmit}>
        <h1>Vends ton article</h1>
        <h2>Title</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <h2>Description</h2>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => {
            console.log(event.target.value);
            setDescription(event.target.value);
          }}
        />
        <h2>Price</h2>
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(event) => {
            console.log(event.target.value);
            setPrice(event.target.value);
          }}
        />
        <h2>Condition</h2>
        <input
          type="text"
          placeholder="condition"
          value={condition}
          onChange={(event) => {
            console.log(event.target.value);
            setCondition(event.target.value);
          }}
        />
        <h2>City</h2>
        <input
          type="text"
          placeholder="city"
          value={city}
          onChange={(event) => {
            console.log(event.target.value);
            setCity(event.target.value);
          }}
        />
        <h2>Brand</h2>
        <input
          type="text"
          placeholder="brand"
          value={brand}
          onChange={(event) => {
            console.log(event.target.value);
            setBrand(event.target.value);
          }}
        />
        <h2>Size</h2>
        <input
          type="text"
          placeholder="size"
          value={size}
          onChange={(event) => {
            console.log(event.target.value);
            setSize(event.target.value);
          }}
        />
        <h2>Color</h2>
        <input
          type="text"
          placeholder="color"
          value={color}
          onChange={(event) => {
            console.log(event.target.value);
            setColor(event.target.value);
          }}
        />
        <h2>Picture</h2>
        <input
          type="file"
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />

        <input className="submit" type="submit" value={"Poster une offer"} />

        {imgFromCloudinary && <img src={imgFromCloudinary} alt="" />}
      </form>
    </div>
  );
};
export default Publish;
