import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import Button from '../../components/library/Button';
import { CardBasketIcon,CartCheckout,CardLikeIcon,CardLikeFullIcon} from '../../../svg';
import { useDispatch,useSelector } from 'react-redux';
import { addToBasket } from '../../../redux/slices/addToBasketSlice';
import { addToLike,removeLike } from '../../../redux/slices/addToLikeSlice';
// import { removeCard } from '../../redux/slices/addToCardSlice';
// import { addToCard } from '../../redux/slices/addToCardSlice';
// import { NavLink } from 'react-router-dom';
// import { increment } from '../../redux/slices/CounterSlice';
const Cards = ({data}) => {
  // const navigate = useNavigate();
    const [buttonText, setButtonText] = useState('Səbətə at');
    const [buttonColor, setButtonColor] = useState('#D10024'); // Buton rengi
    const [buttonTextColor, setButtonTextColor] = useState('white');
    const [iconBasket, setIconBasket] = useState(<CardBasketIcon className="card-btn_icon"/>);
    // const [liked, setLiked] = useState(false);
    const dispatch=useDispatch();

    const likedProducts = useSelector((state) => state.like)
    const isProductLiked = likedProducts.some((product) => product.id === data.id);


    const handleLikeClick = (productId) => {
      if (isProductLiked) {
        dispatch(removeLike(productId));
      } else {
        dispatch(addToLike(data));
        // localStorage.setItem(`like_product_${data.id}`, JSON.stringify(data));
      }
    };
    
    const handleAddToBasket=()=>{
      if (buttonText === 'Səbətə at'){
        dispatch(addToBasket(data));
        // dispatch(addToCard());
        // const price = parseFloat(data.discounts[0]?.currentPrice || data.price);
        setButtonText('Səbətdə'); // Metni değiştir
        setButtonColor('#eee')
        setButtonTextColor('#666')
        setIconBasket(<CartCheckout className="card-btn_icon" />); 
        // localStorage.setItem(`basket_product_${data.id}`, JSON.stringify(data));
        setTimeout(() => {
        setButtonText('Səbətə at'); // Belirli bir süre sonra metni geri değiştir
        setButtonColor('#D10024')
        setButtonTextColor('white')
        setIconBasket(<CardBasketIcon className="card-btn_icon" />); 
      }, 1000)
      }
    }

    

    const { discounts,previewImage, title, price } = data;
  return (
    <div className='swiper-slide_card'>
        <button className='like-btn' onClick={()=>handleLikeClick(data.id)}>
      {isProductLiked ? <CardLikeFullIcon /> : <CardLikeIcon />}
      </button>
    <div className='card-discount-percentage'>
  {discounts[0]?.discountPercentage ? (
  <div className='discount-active'>-{discounts[0].discountPercentage}</div>
) :     <div className='discount-hidden'></div>}
</div>
<img src={previewImage} alt="" />
<div className='card-title'>{title}</div>
{data.discounts[0]?.currentPrice ? (
                  <>
                  <del>
                    <div className='card-price-deleted'>{(price).toLocaleString('az-AZ')} ₼</div>
                  </del>
                  <div className='card-discount-price'>{(discounts[0].currentPrice).toLocaleString('az-AZ')} ₼</div>
                  </>
                ) : (
                  <div className='card-price'>{(price).toLocaleString('az-AZ') } ₼</div>
                )}
<div className="card-view">
<button className='card-btn' onClick={handleAddToBasket} style={{ backgroundColor: buttonColor,color:buttonTextColor }}>{iconBasket} <div className='card-btn_text'>{buttonText}</div> </button>
</div>
  </div>
  )
}

export default Cards