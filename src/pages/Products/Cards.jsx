// import React from 'react'
import React, { useState } from 'react';
import Button from '../../components/library/Button';
import { CardBasketIcon,CartCheckout,CardLikeIcon,CardLikeFullIcon} from '../../svg';
import { useDispatch,useSelector } from 'react-redux';
import { addToBasket } from '../../redux/slices/addToBasketSlice';
import { addToLike,removeLike } from '../../redux/slices/addToLikeSlice';
import { removeCard } from '../../redux/slices/addToCardSlice';
import { addToCard } from '../../redux/slices/addToCardSlice';
// import { increment } from '../../redux/slices/CounterSlice';
const Cards = ({data}) => {
    const [buttonText, setButtonText] = useState('Səbətə at');
    const [buttonColor, setButtonColor] = useState('#D10024'); // Buton rengi
    const [buttonTextColor, setButtonTextColor] = useState('white');
    const [iconBasket, setIconBasket] = useState(<CardBasketIcon className="card-btn_icon"/>);
    // const [liked, setLiked] = useState(false);
    const dispatch=useDispatch();

    const likedProducts = useSelector((state) => state.like)
    const isProductLiked = likedProducts.some((product) => product.id === data.id);


    const handleLikeClick = (productId) => {
     
      // if (liked) {
      //   // Ürünü beğenmişse ve düğmeye tıklarsa, beğenmeyi kaldırın
      //   dispatch(removeLike(productId));
      //   // dispatch(removeCard());
      //   setLiked(false);
      // } else {
      //   // Ürünü beğenmemişse ve düğmeye tıklarsa, beğenme eylemini gerçekleştirin
      //   dispatch(addToLike(data));
      //   // dispatch(addToCard());
      //   setLiked(true);
      // }
      if (isProductLiked) {
        dispatch(removeLike(productId));
      } else {
        dispatch(addToLike(data));
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
        setTimeout(() => {
        setButtonText('Səbətə at'); // Belirli bir süre sonra metni geri değiştir
        setButtonColor('#D10024')
        setButtonTextColor('white')
        setIconBasket(<CardBasketIcon className="card-btn_icon" />); 
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
    <button className='like-btn' onClick={()=>handleLikeClick(data.id)}>
      {/* {liked ? <CardLikeFullIcon /> : <CardLikeIcon />} */}
      {isProductLiked ? <CardLikeFullIcon /> : <CardLikeIcon />}
      </button>
    <img src={images[0]?.imagePath} alt="" />
    <div className='card-title'>{title}</div>
   {/* {discounts[0]?.currentPrice ? (
  <del>
    <div className='card-price'>{price} ₼</div>
  </del>
) : (
  <div className='card-price'>{price} ₼</div>
)} */}
   {data.discounts[0]?.currentPrice ? (
                  <>
                  <del>
                    <div className='card-price'>{price} ₼</div>
                  </del>
                  <div className='card-discount-price'>{discounts[0].currentPrice} ₼</div>
                  </>
                ) : (
                  <div className='card-price'>{price } ₼</div>
                )}

    {/* <div className='card-discount-price'>
      {discounts[0]?.currentPrice
        ? `${discounts[0].currentPrice} ₼`
        : ''}
    </div> */}
    <div className="card-view">
      <Button className='card-btn' onClick={handleAddToBasket} style={{ backgroundColor: buttonColor,color:buttonTextColor }}>{iconBasket} <div className='card-btn_text'>{buttonText}</div> </Button>
    </div>
  </div>
  )
}

export default Cards