import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/library/Button";
import {
  CardBasketIcon,
  CartCheckout,
  CardLikeIcon,
  CardLikeFullIcon,
} from "../../svg";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeBasket } from "../../redux/slices/addToBasketSlice";
import { addToLike, removeLike } from "../../redux/slices/addToLikeSlice";

const Cards = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket);
  const likedProducts = useSelector((state) => state.like);

  const isProductLiked = likedProducts.some(
    (product) => product.id === data.id
  );
  const isInBasket = basketItems.some((item) => item.id === data.id);

  const [buttonText, setButtonText] = useState(
    isInBasket ? "Səbətdə" : "Səbətə at"
  );
  const [buttonColor, setButtonColor] = useState(
    isInBasket ? "#eee" : "#D10024"
  );
  const [buttonTextColor, setButtonTextColor] = useState(
    isInBasket ? "#666" : "white"
  );
  const [iconBasket, setIconBasket] = useState(
    isInBasket ? (
      <CartCheckout className="card-btn_icon" />
    ) : (
      <CardBasketIcon className="card-btn_icon" />
    )
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isInBasket) {
      setButtonText("Səbətdə");
      setButtonColor("#eee");
      setButtonTextColor("#666");
      setIconBasket(<CartCheckout className="text-[#fff]" />);
    } else {
      setButtonText("Səbətə at");
      setButtonColor("#D10024");
      setButtonTextColor("white");
      setIconBasket(<CardBasketIcon className="text-[green]" />);
    }
  }, [isInBasket]);

  const handleLikeClick = (productId) => {
    if (isProductLiked) {
      dispatch(removeLike(productId));
    } else {
      dispatch(addToLike(data));
    }
  };

  const handleAddToBasket = () => {
    setLoading(true);
    setTimeout(() => {
      if (!isInBasket) {
        dispatch(addToBasket(data));
      }
      setLoading(false);
    }, 1000);
  };

  const { discounts, previewImage, title, price } = data;

  return (
    <div className="product-card">
      <div className="card-discount-percentage">
        {discounts[0]?.discountAmount ? (
          <div className="discount-active bg-[#D10024] text-[#fff]">-{discounts[0].discountAmount}</div>
        ) : (
          <div className="discount-hidden"></div>
        )}
      </div>
      <button className="like-btn" onClick={() => handleLikeClick(data.id)}>
        {isProductLiked ? <CardLikeFullIcon /> : <CardLikeIcon />}
      </button>
      <img
        src={previewImage}
        alt=""
        onClick={() => navigate(`/product-detail/${data.id}`)}
      />
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
        <Button
          className="card-btn"
          onClick={handleAddToBasket}
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
        >
          {!loading || isInBasket ? (
            iconBasket
          ) : (
            <div className="spinner"></div>
          )}
          <div className="card-btn_text">{buttonText}</div>
        </Button>
      </div>
    </div>
  );
};

export default Cards;
