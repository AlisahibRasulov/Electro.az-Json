// import React from 'react'
import React, { useState } from 'react';
import Button from '../../components/library/Button';
import { CardBasketIcon,CartCheckout } from '../../svg';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/slices/addToBasketSlice';
import { addToCard } from '../../redux/slices/addToCardSlice';
import { increment } from '../../redux/slices/CounterSlice';
const Cards = ({data}) => {
    const [buttonText, setButtonText] = useState('Səbətə at');
    const [buttonColor, setButtonColor] = useState('#D10024'); // Buton rengi
    const [buttonTextColor, setButtonTextColor] = useState('white');
    const [icon, setIcon] = useState(<CardBasketIcon className="card-btn_icon"/>); // Başlangıçta sepet ikonu
    const dispatch=useDispatch();

    const handleAddToBasket=()=>{
      if (buttonText === 'Səbətə at'){
        dispatch(addToBasket(data));
        dispatch(addToCard());
        // const price = parseFloat(data.discounts[0]?.currentPrice || data.price);
        setButtonText('Səbətdə'); // Metni değiştir
        setButtonColor('#eee')
        setButtonTextColor('#666')
        setIcon(<CartCheckout className="card-btn_icon" />); 
        setTimeout(() => {
        setButtonText('Səbətə at'); // Belirli bir süre sonra metni geri değiştir
        setButtonColor('#D10024')
        setButtonTextColor('white')
        setIcon(<CardBasketIcon className="card-btn_icon" />); 
      }, 1000)
      }
    }
    const { discounts,images, title, price } = data;
  return (
    <div className='product-card'>
    
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
      <Button className='card-btn' onClick={handleAddToBasket} style={{ backgroundColor: buttonColor,color:buttonTextColor }}>{icon} <div className='card-btn_text'>{buttonText}</div> </Button>
    </div>
  </div>
  )
}

export default Cards