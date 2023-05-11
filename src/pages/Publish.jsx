import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

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
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(response.data);
      setImgFromCloudinary(response.data.secure_url);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    token && (
      <div className="publish">
        <form onSubmit={handleSubmit}>
          <h1>Vends ton article</h1>

          <label htmlFor="title">Title</label>
          <input
            type="text"
            is="title"
            placeholder="Title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <label htmlFor="message">Description</label>
          <textarea
            name="dexription"
            id="message"
            placeholder="Description de l'article"
            value={description}
            onChange={(event) => {
              console.log(event.target.value);
              setDescription(event.target.value);
            }}
          />

          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            placeholder="price"
            value={price}
            onChange={(event) => {
              console.log(event.target.value);
              setPrice(event.target.value);
            }}
          />

          <label htmlFor="condition">Condition</label>
          <input
            type="text"
            id="condition"
            placeholder="condition"
            value={condition}
            onChange={(event) => {
              console.log(event.target.value);
              setCondition(event.target.value);
            }}
          />

          <label htmlFor="City">City</label>
          <input
            type="text"
            id="City"
            placeholder="city"
            value={city}
            onChange={(event) => {
              console.log(event.target.value);
              setCity(event.target.value);
            }}
          />

          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            id="brand"
            placeholder="brand"
            value={brand}
            onChange={(event) => {
              console.log(event.target.value);
              setBrand(event.target.value);
            }}
          />

          <label htmlFor="size">Size</label>
          <input
            type="text"
            id="size"
            placeholder="size"
            value={size}
            onChange={(event) => {
              console.log(event.target.value);
              setSize(event.target.value);
            }}
          />

          <label htmlFor="color">Color</label>
          <input
            type="text"
            id="color"
            placeholder="color"
            value={color}
            onChange={(event) => {
              console.log(event.target.value);
              setColor(event.target.value);
            }}
          />
          <label htmlFor="picture">Choisis une image</label>
          <input
            style={{ display: "none" }}
            type="file"
            id="picture"
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
          />
          {picture && <img src={URL.createObjectURL(picture)} />}

          <input className="submit" type="submit" value={"Poster une offre"} />

          {imgFromCloudinary && <img src={imgFromCloudinary} alt="" />}
        </form>
      </div>
    )
  );
};
export default Publish;
