import React from 'react'
import { useNavigate } from "react-router-dom";
// import "../styles/pages/products/products.scss";
import { useDispatch,  useSelector } from 'react-redux';  
import { removeLike,removeLikeAll } from '../redux/slices/addToLikeSlice';
import { removeCard,removeAllCard } from '../redux/slices/addToCardSlice';
// import { increment, decrement } from '../redux/slices/CounterSlice';
import Button from '../components/library/Button';
import { DeletedIcon } from '../svg';
const Like = ({data}) => {
  const navigate = useNavigate();
    const counter=useSelector((state)=> state.counter);
    const likeItems=useSelector((state)=>state.like);
    // const totalPrice=useSelector((state)=>state.basket.quantity * state.basket.price);
    // const { items, totalPrice } = useSelector((state) => state.basket);
    // const basketCount = useSelector((state)=>state.basket.length);
    // const totalPrice = useSelector(state => state.basket.totalPrice);
    const dispatch=useDispatch();

   
    const handleAllDeletedToLike=()=>{
      dispatch(removeLikeAll());
      // dispatch(removeAllCard())
    }
    const handleDeletedToLike=(productId)=>{
      dispatch(removeLike(productId));
      // dispatch(removeCard());
    }

  return (
    <div className='like'>
       {likeItems.length > 0 ? (
<div className="products">
<table id="customers">
        <thead>
          <tr>
            <th></th>
            <th>Məhsul</th>
            <th>Qiymət</th>
          </tr>
        </thead>
        <tbody> 
          {likeItems.map((data)=>{
              return(
              <tr key={data.id}>
                <td><button className='delete-btn' onClick={()=>handleDeletedToLike(data.id)}><DeletedIcon /></button></td>
                {/* <td>
                  <div className='product'>
                    <img className='data-img' src={data.previewImage} alt="" />
                    <p className='data-title'>{data.title}</p>
                </div> 
                </td> */}
                <td>
                  <div className='product'>
                    <img className='data-img' src={data.previewImage ? data.previewImage : (data.images && data.images[0] ? data.images[0].imagePath : '')} alt="" />
                    <p className='data-title'>{data.title}</p>
                  </div>
                </td>
                <td>
                  {data.discounts[0]?.currentPrice ? (
                  <>
                  <del>
                    <div className='card-price'>{data.price} ₼</div>
                  </del>
                  <div className='card-discount-price'>{data.discounts[0].currentPrice} ₼</div>
                  </>
                ) : (
                  <div className='card-price'>{data.price} ₼</div>
                )}
                </td>
               <td></td>
                {/* <td> <p>Toplam Fiyat: {data.price * data.quantity} ₼</p></td> */}
                {/* <td><button onClick={()=>navigate(`/product-detail/${item.id}`)}>Details</button></td>
                <td><button onClick={()=>deletedItem(item.id)}>Delete</button></td>  */}
              </tr>
              )
          })}
          
        </tbody> 
      </table>
      <Button className='clear-btn' onClick={handleAllDeletedToLike}>Seçilənləri sil</Button>
      {/* <p>Toplam Fiyat: {totalPrice} ₼</p> */}
</div>
) : (
  <div className='clear-page'>
    <p>Səbətinizdə məhsul yoxdur</p>
    <Button className='home-btn' onClick={()=>navigate(`/`)}>Əsas Səhifəyə qayıt</Button>
  </div>
  
  

)}
    </div>
  )
}

export default Like


// src={data.images[0]?.imagePath}