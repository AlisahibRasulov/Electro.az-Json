import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from '../components/library/Button';
import { CardBasketIcon,CartCheckout,CardLikeIcon,CardLikeFullIcon} from '../svg';
import { useDispatch,useSelector } from 'react-redux';
import { addToBasket } from '../redux/slices/addToBasketSlice';
import { addToLike,removeLike } from '../redux/slices/addToLikeSlice';

// import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Thumbs } from 'swiper'
import { Navigation, Thumbs } from 'swiper/modules';

const DetailCard = ({data}) => {
  const navigate = useNavigate();

  const [activeThumb, setActiveThumb] = useState()
  const [cardSlider, setCardSlider] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios(`http://34.125.216.115:9095/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setCardSlider([res.data]); // Wrap the response data in an array
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);


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
        navigate("/product-detail/:id");
        // localStorage.setItem(`basket_product_${data.id}`, JSON.stringify(data));
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
    <div className='detail-card'>
      <div className="container">
      <div className="detail-card_content">
        <div className="card-image">
        {/* <img  src={images[0]?.imagePath} alt="" />
        <img  src={images[1]?.imagePath} alt="" />
        <img  src={images[2]?.imagePath} alt="" /> */}

<Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className='product-images-slider'
        >
            
                    <SwiperSlide>
                    <img  src={images[0]?.imagePath} alt="" />
                    </SwiperSlide>
             
        </Swiper>
        <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            pagination={{
              clickable: true,
            }}
            className='product-images-slider-thumbs'
        >
            {/* {
                cardSlider.map((item,index) => (
                    <SwiperSlide key={index} data={item}>
                        <div className="product-images-slider-thumbs-wrapper">
                        <img  index={0}  src={item.images[0]?.imagePath} alt="" />
                        <img  index={1} src={item.images[1]?.imagePath} alt="" />
                        <img  index={2} src={item.images[2]?.imagePath} alt="" />
                        </div>
                    </SwiperSlide>
                ))
            } */}
             
                    <SwiperSlide>
                        <div className="product-images-slider-thumbs-wrapper">
                            {/* <img src={item} alt="product images" /> */}
                            <img  key={id}  src={images[0]?.imagePath} alt="product images" />
                            {/* <img  index={1}  src={images[1]?.imagePath} alt="product images" />
                            <img  index={2}  src={images[2]?.imagePath} alt="product images" /> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-images-slider-thumbs-wrapper">
                            {/* <img src={item} alt="product images" /> */}
                            <img key={id}  src={images[1]?.imagePath} alt="product images" />
                            {/* <img  index={1}  src={images[1]?.imagePath} alt="product images" />
                            <img  index={2}  src={images[2]?.imagePath} alt="product images" /> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-images-slider-thumbs-wrapper">
                            {/* <img src={item} alt="product images" /> */}
                            <img  key={id}  src={images[2]?.imagePath} alt="product images" />
                            {/* <img  index={1}  src={images[1]?.imagePath} alt="product images" />
                            <img  index={2}  src={images[2]?.imagePath} alt="product images" /> */}
                        </div>
                    </SwiperSlide>
              
        </Swiper>
        </div>
        <div className="card-view"></div>
      </div>
      </div>
      
    
    {/* <div className='card-discount-percentage'>
        {data.discounts[0]?.discountPercentage ? (
        <div className='discount-active'>-{data.discounts[0].discountPercentage}</div>
) :     <div className='discount-hidden'></div>}
    </div>
    <button className='like-btn' onClick={()=>handleLikeClick(data.id)}>
      {isProductLiked ? <CardLikeFullIcon /> : <CardLikeIcon />}
      </button>
    <img  src={data.images[0]?.imagePath} alt="" />
    <div className='card-title'>{data.title}</div>
   {data.discounts[0]?.currentPrice ? (
                  <>
                  <del>
                    <div className='card-price'>{(data.price).toLocaleString('az-AZ')} ₼</div>
                  </del>
                  <div className='card-discount-price'>{(data.discounts[0].currentPrice).toLocaleString('az-AZ')} ₼</div>
                  </>
                ) : (
                  <div className='card-price'>{(data.price).toLocaleString('az-AZ') } ₼</div>
                )}
    <div className="card-view">
      <Button className='card-btn' onClick={handleAddToBasket} style={{ backgroundColor: buttonColor,color:buttonTextColor }}>{iconBasket} <div className='card-btn_text'>{buttonText}</div> </Button>
    </div> */}
  </div>
  )
}

export default DetailCard