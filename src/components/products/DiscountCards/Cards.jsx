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

    const cardPrice = {
      fontSize: "15px",
    }

    const { discounts,previewImage, title, price } = data;
  return (
    <div className='swiper-slide_card'>
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
                    <div className='card-price' style={cardPrice}>{(price).toLocaleString('az-AZ')} ₼</div>
                  </del>
                  <div className='card-discount-price'>{(discounts[0].currentPrice).toLocaleString('az-AZ')} ₼</div>
                  </>
                ) : (
                  <div className='card-price'>{(price).toLocaleString('az-AZ') } ₼</div>
                )}
<div className="card-view">
<Button className='card-btn' onClick={handleAddToBasket}><CardBasketIcon className="card-btn_basket"/> <div className='card-btn_text'>Səbətə at</div> </Button>
</div>
  </div>
  )
}

export default Cards