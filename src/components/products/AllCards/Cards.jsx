import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CardBasketIcon,
  CartCheckout,
  CardLikeIcon,
  CardLikeFullIcon,
} from "../../../svg";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../redux/slices/addToBasketSlice";
import { addToLike, removeLike } from "../../../redux/slices/addToLikeSlice";

const Cards = ({ data }) => {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Səbətə at");
  const [buttonColor, setButtonColor] = useState("#D10024");
  const [buttonTextColor, setButtonTextColor] = useState("white");
  const [iconBasket, setIconBasket] = useState(
    <CardBasketIcon className="card-btn_icon" />
  );
  const dispatch = useDispatch();

  const likedProducts = useSelector((state) => state.like);
  const isProductLiked = likedProducts.some(
    (product) => product.id === data.id
  );

  const handleLikeClick = (productId) => {
    if (isProductLiked) {
      dispatch(removeLike(productId));
    } else {
      dispatch(addToLike(data));
    }
  };

  const handleAddToBasket = () => {
    if (buttonText === "Səbətə at") {
      dispatch(addToBasket(data));
      setButtonText("Səbətdə");
      setButtonColor("#eee");
      setButtonTextColor("#666");
      setIconBasket(<CartCheckout className="card-btn_icon" />);
      setTimeout(() => {
        setButtonText("Səbətə at");
        setButtonColor("#D10024");
        setButtonTextColor("white");
        setIconBasket(<CardBasketIcon className="card-btn_icon" />);
      }, 1000);
    }
  };

  const { discounts,previewImage, title, price } = data;
  return (
    <div className="swiper-slide_card">
      <div className="small-box">New</div>
      <button className="like-btn" onClick={() => handleLikeClick(data.id)}>
        {isProductLiked ? <CardLikeFullIcon /> : <CardLikeIcon />}
      </button>
      <img src={previewImage} alt="" />
      <div className="card-title">{title}</div>
      {data.discounts[0]?.currentPrice ? (
        <>
          <del>
            <div className="card-price">{price.toLocaleString("az-AZ")} ₼</div>
          </del>
          <div className="card-discount-price">
            {discounts[0].currentPrice.toLocaleString("az-AZ")} ₼
          </div>
        </>
      ) : (
        <div className="card-price">{price.toLocaleString("az-AZ")} ₼</div>
      )}
      <div className="card-view">
        <button className="card-btn" onClick={handleAddToBasket}>
          <CardBasketIcon className="card-btn_basket" />{" "}
          <div className="card-btn_text">Səbətə at</div>{" "}
        </button>
      </div>
    </div>
  );
};

export default Cards;
