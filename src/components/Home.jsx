import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/3.jpg";
import { toast } from "react-hot-toast";
import {useDispatch} from "react-redux"

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 159999,
      imgSrc: img2,
      id: "121222222121",
    },
    {
      name: "SSC Book",
      price: 999,
      imgSrc: img1,
      id: "12122121",
    },
  ];

const dispatch = useDispatch();

  const addToCartHandler = (option) => {
    console.log(option);
    dispatch({type:"addToCart",payload:option})
    toast.success("Add to cart");
  };

  return (
    <>
      <div className="home">
        {productList.map((i) => (
          <ProductCard
            key={i.id}
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            id={i.id}
            handler={addToCartHandler}
          />
        ))}
      </div>
    </>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);
export default Home;














