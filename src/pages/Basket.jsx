import React from 'react';
import { useNavigate } from "react-router-dom";
// import "../styles/pages/products/products.scss";
import { useDispatch,  useSelector } from 'react-redux';  
import { removeBasket, removeBasketAll,incrementQuantity, decrementQuantity } from '../redux/slices/addToBasketSlice';
import { removeCard,removeAllCard } from '../redux/slices/addToCardSlice';
import { increment, decrement } from '../redux/slices/CounterSlice';
import Button from '../components/library/Button';
import { DecrementMinusIcon, DeletedIcon, IncrementPlusIcon } from '../svg';




const Basket = ({data}) => {
  const navigate = useNavigate();
    const counter=useSelector((state)=> state.counter);
    const basketItems=useSelector((state)=>state.basket);
    const basketCount = useSelector((state)=>state.basket.length);
    const totalPrice = useSelector(state => state.basket.totalPrice);
    const dispatch=useDispatch();

   
    const handleAllDeletedToBasket=()=>{
      dispatch(removeBasketAll());
      dispatch(removeAllCard())
    }
    const handleDeletedToBasket=(productId)=>{
      dispatch(removeBasket(productId));
      dispatch(removeCard());
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
                <td><DeletedIcon className='delete-btn' onClick={()=>handleDeletedToBasket(data.id)}/></td>
                <td><div className='product'><img className='data-img' src={data.images[0]?.imagePath} alt="" /><p className='data-title'>{data.title}</p></div> </td>
                <td> 
                  <div className="counter-quantity">
                  <button className='counter-quantity_btn' onClick={()=>handleDecrement(data.id)}><DecrementMinusIcon/></button>
                  <div className='data-quantity'>{data.quantity}</div>
                  <button className='counter-quantity_btn' onClick={()=>handleIncrement(data.id)}> <IncrementPlusIcon/></button>
                  </div>
                </td>
                <td>
                {data.discounts[0]?.currentPrice ? (
                          <del>
                            <div className='card-price'>{data.price} ₼</div>
                          </del>
                        ) : (
                          <div className='card-price'>{data.price} ₼</div>
                        )}
                        
                            <div className='card-discount-price'>
                              {data.discounts[0]?.currentPrice
                                ? `${data.discounts[0].currentPrice} ₼`
                                : ''}
                            </div>
                </td>
                {/* <td><button onClick={()=>navigate(`/product-detail/${item.id}`)}>Details</button></td>
                <td><button onClick={()=>deletedItem(item.id)}>Delete</button></td>  */}
              </tr>
              )
          })}
          
        </tbody> 
      </table>
      <Button className='clear-btn' onClick={handleAllDeletedToBasket}>Seçilənləri sil</Button>
      <p>Toplam Fiyat: {totalPrice} ₼</p>
</div>
) : (
  <div>
    <p>Səbətinizdə məhsul yoxdur</p>
    <Button onClick={()=>navigate(`/`)}>Əsas Səhifəyə get</Button>
  </div>
  
  

)}
    
    </div>
  )
}

export default Basket;