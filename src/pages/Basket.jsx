import React,{useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
// import "../styles/pages/products/products.scss";
import { useDispatch,  useSelector } from 'react-redux';  
import { removeBasket, removeBasketAll,incrementQuantity, decrementQuantity } from '../redux/slices/addToBasketSlice';
import { removeCard,removeAllCard } from '../redux/slices/addToCardSlice';
import { increment, decrement } from '../redux/slices/CounterSlice';
import Button from '../components/library/Button';
import { DecrementMinusIcon, DeletedIcon, IncrementPlusIcon } from '../svg';
import { addToBasket } from '../redux/slices/addToBasketSlice';
// import { useEffect } from "react";



const Basket = ({data}) => {
  const navigate = useNavigate();
    const counter=useSelector((state)=> state.counter);
    const basketItems=useSelector((state)=>state.basket);
    const totalPrice=useSelector((state)=>state.basket.quantity * state.basket.price);
    const basketCount = useSelector((state)=>state.basket.length);
    // const totalPrice = useSelector(state => state.basket.totalPrice);
    const  [ totalPrices,  setTotalPrices ] = useState(0);
    const dispatch=useDispatch();
    
    // useEffect(() => {
    //   let sumOfPrice = 0;
    
    //   basketItems.forEach((data) => {
    //     // Eğer indirimli fiyat varsa, indirimli fiyatı kullan; yoksa normal fiyatı kullan
    //     const priceToUse = data.discounts && data.discounts.length > 0
    //       ? data.discounts[0].currentPrice
    //       : data.price;
    
    //     sumOfPrice += priceToUse * data.quantity;
    //   });
    
    //   // setTotalPrices fonksiyonunu çağırarak toplam fiyatı güncelleyin
    //   setTotalPrices(sumOfPrice.toLocaleString('az-AZ'));
    // }, [basketItems]);  // useEffect'in dependency array'ine basketItems'i ekleyerek, bu değerin değiştiğinde useEffect'in çalışmasını sağlayın
    
    useEffect(()=>{
      let sumOfPrice = 0;
      basketItems.map((data)=>{
        if (data.discounts && data.discounts.length > 0) {
          sumOfPrice = ( sumOfPrice + data.discounts[0]?.currentPrice ? data.discounts[0].currentPrice * data.quantity : 0);
      } else {
          sumOfPrice = (sumOfPrice + data.price * data.quantity);
      }
      }) 
      let sumOfPrices = sumOfPrice.toLocaleString('az-AZ')
      setTotalPrices(sumOfPrices)
    })



    const handleAllDeletedToBasket=()=>{
      dispatch(removeBasketAll());
      // dispatch(removeAllCard())
    }
    const handleDeletedToBasket=(productId)=>{
      dispatch(removeBasket(productId));
      // dispatch(removeCard());
    }

    const handleIncrement=(productId) => {
      dispatch(incrementQuantity(productId));
    };
  
    const handleDecrement=(productId) => {
      dispatch(decrementQuantity(productId));
    };
    // const handleCounterIncrementToBasket=()=>{
    //   // dispatch(increment());
    //   dispatch(addToBasket(data));
    //   // dispatch(removeCard());
    // }
    // const handleCounterDecrementToBasket=()=>{
    //   dispatch(decrement());
    //   // dispatch(removeCard());
    // }
  
    
  return (
    
    <div className='basket'>
        <div className='basket-header'>Səbət({basketCount}məhsul)</div>
        {basketItems.length > 0 ? (
<div className="products">
<table id="customers">
        <thead>
          <tr>
            <th></th>
            <th>Məhsul</th>
            <th>Say</th>
            <th>Qiymət</th>
          </tr>
        </thead>
        <tbody> 
          {basketItems.map((data)=>{
              return(
              <tr key={data.id}>
                 <td><button className='delete-btn' onClick={()=>handleDeletedToBasket(data.id)}><DeletedIcon /></button></td>
                <td><div className='product'>
                <img className='data-img' src={data.previewImage ? data.previewImage : (data.images && data.images[0] ? data.images[0].imagePath : '')} alt="" />
                  <p className='data-title'>{data.title}</p>
                  </div> 
                  </td>
                <td> 
                  <div className="counter-quantity">
                  <button className='counter-quantity_btn' onClick={()=>handleDecrement(data.id)}><DecrementMinusIcon/></button>
                  <div className='data-quantity'>{data.quantity}</div>
                  <button className='counter-quantity_btn' onClick={()=>handleIncrement(data.id)}> <IncrementPlusIcon/></button>
                  </div>
                </td>
  <td>
  {data.discounts[0]?.currentPrice ? (
    <>
      <del>
        <div className='card-price'>{(data.price * data.quantity).toLocaleString('az-AZ')} ₼</div>
      </del>
      <div className='card-discount-price'>{(data.discounts[0].currentPrice * data.quantity).toLocaleString('az-AZ')}₼</div>
    </>
  ) : (
    <div className='card-price'>{(data.price * data.quantity).toLocaleString('az-AZ')} ₼</div>
  )}
</td>    

              </tr>
              )
          })}
          
        </tbody> 
      </table>
      <Button className='clear-btn' onClick={handleAllDeletedToBasket}>Seçilənləri sil</Button>
      <p>{totalPrices}</p>
</div>
) : (
  <div className='clear-page'>
    <p>Səbətinizdə məhsul yoxdur</p>
    <Button className='home-btn' onClick={()=>navigate(`/`)}>Əsas Səhifəyə qayıt</Button>
  </div>
  
  

)}
     {/* <td><button onClick={()=>navigate(`/product-detail/${item.id}`)}>Details</button></td>
                <td><button onClick={()=>deletedItem(item.id)}>Delete</button></td>  */}
    </div>
  )
}

export default Basket;