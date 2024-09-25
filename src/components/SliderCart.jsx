import React, { useState, useEffect } from "react";
import discountData from "../Json/discount";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../redux/slices/addToBasketSlice";
import { CardBasketIcon, CartCheckout } from "../svg";

const SliderCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  // Get the current item
  const currentItem = discountData[currentIndex];

  // Check if the current item is in the basket
  const isInBasket = basketItems.some((item) => item.id === currentItem?.id);

  // Button state
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % discountData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentItem) {
      setButtonText(isInBasket ? "Səbətdə" : "Səbətə at");
      setButtonColor(isInBasket ? "#eee" : "#D10024");
      setButtonTextColor(isInBasket ? "#666" : "white");
      setIconBasket(
        isInBasket ? (
          <CartCheckout className="card-btn_icon" />
        ) : (
          <CardBasketIcon className="card-btn_icon" />
        )
      );
      // Set initial time left for the countdown (for example, 11 hours, 47 minutes, 23 seconds)
      const endTime =
        new Date().getTime() + 11 * 60 * 60 * 1000 + 47 * 60 * 1000 + 23 * 1000;
      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance < 0) {
          clearInterval(countdownInterval);
          setTimeLeft("Kampanya sona erdi");
          return;
        }

        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      };

      const countdownInterval = setInterval(updateCountdown, 1000);
      return () => clearInterval(countdownInterval);
    }
  }, [currentItem, isInBasket]);

  const handleAddToBasket = (item) => {
    setLoading(true);
    setTimeout(() => {
      if (!isInBasket) {
        dispatch(addToBasket(item));
      }
      setLoading(false);
    }, 1000); // Adjust the timeout duration as needed
  };

  return (
    <div className="slider-cart bg-[#fff] border-[1px] shadow border-[#eee] rounded-[10px] divide-solid flex justify-center w-[100%] h-[100%] xl:h-[100%] xl:mb-[20px] lg:h-[600px] lg:mb-[20px] lg:px-[20px] md:h-[500px] md:px-[20px] sm:px-[20px] sm:mb-[20px] sm:h-[500px] 2xs:h-[400px] 2xs:mb-[20px] 2xs:px-[20px] xs:h-[400px] xs:mb-[20px] xs:px-[20px]">
      {currentItem && (
        <div
          key={currentItem.id}
          className="slider-cart__slide w-[100%] h-[100%] flex flex-col items-center justify-evenly"
        >
          <div className="countdown-timer flex flex-col justify-center font-[600] text-center mb-2 border-b-[1px] w-[100%]">
            <div className="timer_title text-[20px]">Günün təklifi</div>
            <div className="timer_info flex justify-around">
              <div className="timer_hours flex flex-col text-[#666]">
                <div className="text-[#D10024]">{timeLeft.minutes}</div> saat
              </div>
              <div className="timer_minutes flex flex-col text-[#666]">
                <div className="text-[#D10024]">{timeLeft.minutes}</div> dəqiqə
              </div>
              <div className="timer_seconds flex flex-col text-[#666]">
                <div className="text-[#D10024]">{timeLeft.seconds}</div> saniyə
              </div>
            </div>
          </div>
          <div className="slider-cart__info flex flex-col items-center">
            <div className="text-[#666] font-[500] text-center">
              {currentItem.title}
            </div>
            <div className="flex items-center">
              <div className="font-[600] text-[#D10024]">
                {currentItem.discounts[0].currentPrice} ₼
              </div>
              <del>
                <div className="text-[14px] font-[600] text-[#888] ml-2">
                  {currentItem.price} ₼
                </div>
              </del>
            </div>
          </div>

          <div className="slider-cart__image 2xl:w-[160px] xl:w-[160px] lg:w-[160px] md:w-[140px] sm:w-[140px] 2xs:w-[120px] xs:w-[120px]">
            <img
              src={currentItem.previewImage}
              alt={`Slide ${currentIndex}`}
              onClick={() => navigate(`/product-detail/${currentItem.id}`)}
              className="w-[100%]"
            />
          </div>

          <button
            className="px-[50px] py-[15px] rounded-[10px] flex justify-center items-center lg:w-[100%]  md:w-[100%] sm:w-[100%] 2xs:w-[100%] xs:w-[10S0%]"
            onClick={() => handleAddToBasket(currentItem)}
            style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          >
            {loading ? (
              <div className="spinner"></div>
            ) : (
              <>
                {iconBasket}
                <div className="font-[500]">{buttonText}</div>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default SliderCart;
