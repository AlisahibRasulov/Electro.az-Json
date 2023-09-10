import React from 'react'
import Button from "../../library/Button";
// import {CardLikeHeartIcon} from "../../../svg"
import { CardBasketIcon } from '../../../svg';

// ? Redux
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../../redux/slices/addToBasketSlice';
import { addToCard } from '../../../redux/slices/addToCardSlice';
const Cards = ({data}) => {
    const dispatch=useDispatch();

    const handleAddToBasket=()=>{
      dispatch(addToBasket(data));
      dispatch(addToCard());
    }

    const { previewImage, title, price } = data;
  return (
    <div className='swiper-slide_card'>
         <div className='small-box'>New</div>
          <div className='like_icon-box'>
            {/* <CardLikeHeartIcon className="like_icon"/> */}
          </div>
        <img src={previewImage} alt="" />
        <div className='card-title'>{title}</div>
        <div className='card-price'>{(price).toLocaleString('az-AZ')} ₼</div>
    <div className="card-view">
      <Button className='card-btn' onClick={handleAddToBasket}><CardBasketIcon className="card-btn_basket"/> <div className='card-btn_text'>Səbətə at</div> </Button>
    </div>
    </div>
  )
}

export default Cards