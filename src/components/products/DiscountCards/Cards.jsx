import React from 'react'
import Button from "../../library/Button";
// import {CardLikeHeartIcon} from "../../../svg"
import { CardBasketIcon } from '../../../svg';

import { useDispatch } from 'react-redux';
import { addToBasket } from '../../../redux/slices/addToBasketSlice';
import { addToCard } from '../../../redux/slices/addToCardSlice';
const Cards = ({data}) => {
    const dispatch=useDispatch();

    const handleAddToBasket=()=>{
      dispatch(addToBasket(data));
      dispatch(addToCard());
    }

    const { discounts,images, title, price } = data;
  return (
    <div className='swiper-slide_card'>
    <div className='card-discount-percentage'>
  {discounts[0]?.discountPercentage ? (
  <div className='discount-active'>-{discounts[0].discountPercentage}</div>
) :     <div className='discount-hidden'></div>}
</div>
<img src={images[0]?.imagePath} alt="" />
<div className='card-title'>{title}</div>
{discounts[0]?.currentPrice ? (
<del>
<div className='card-price'>{price} ₼</div>
</del>
) : (
<div className='card-price'>{price} ₼</div>
)}
<div className='card-discount-price'>
{discounts[0]?.currentPrice
  ? `${discounts[0].currentPrice} ₼`
  : ''}
</div>
<div className="card-view">
<Button className='card-btn' onClick={handleAddToBasket}><CardBasketIcon className="card-btn_basket"/> <div className='card-btn_text'>Səbətə at</div> </Button>
</div>
  </div>
  )
}

export default Cards