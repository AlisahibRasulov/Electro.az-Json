// // import React from 'react';
// // // import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// // // // import "@fortawesome/fontawesome-free/css/all.min.css";
// // import {
// //   MDBCard,
// //   MDBCardTitle,
// //   MDBCardText,
// //   MDBCardBody,
// //   MDBCardImage,
// //   MDBRow,
// //   MDBCol
// // } from 'mdb-react-ui-kit';

// // export default function ProductDetails() {
// //   return (
// //     <MDBCard style={{ maxWidth: '540px' }}>
// //       <MDBRow className='g-0'>
// //         <MDBCol md='4'>
// //           <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
// //         </MDBCol>
// //         <MDBCol md='8'>
// //           <MDBCardBody>
// //             <MDBCardTitle>Card title</MDBCardTitle>
// //             <MDBCardText>
// //               This is a wider card with supporting text below as a natural lead-in to additional content. This
// //               content is a little bit longer.
// //             </MDBCardText>
// //             <MDBCardText>
// //               <small className='text-muted'>Last updated 3 mins ago</small>
// //             </MDBCardText>
// //           </MDBCardBody>
// //         </MDBCol>
// //       </MDBRow>
// //     </MDBCard>
// //   );
// // }

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// // import FavoriteIcon from '@mui/icons-material/Favorite';
// // import ShareIcon from '@mui/icons-material/Share';
// // import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// // import MoreVertIcon from '@mui/icons-material/MoreVert';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function DetailCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             {/* <MoreVertIcon /> */}
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="/static/images/cards/paella.jpg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           {/* <FavoriteIcon /> */}
//         </IconButton>
//         <IconButton aria-label="share">
//           {/* <ShareIcon /> */}
//         </IconButton>
//         {/* <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore> */}
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//             aside for 10 minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//             medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//             occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//             large plate and set aside, leaving chicken and chorizo in the pan. Add
//             pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//             stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and
//             peppers, and cook without stirring, until most of the liquid is absorbed,
//             15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//             mussels, tucking them down into the rice, and cook again without
//             stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don&apos;t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

// import React from 'react'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../components/library/Button';
import { CardBasketIcon,CartCheckout,CardLikeIcon,CardLikeFullIcon} from '../svg';
import { useDispatch,useSelector } from 'react-redux';
import { addToBasket } from '../redux/slices/addToBasketSlice';
import { addToLike,removeLike } from '../redux/slices/addToLikeSlice';
// import { removeCard } from '../../redux/slices/addToCardSlice';
// import { addToCard } from '../../redux/slices/addToCardSlice';
// import { NavLink } from 'react-router-dom';
// import { increment } from '../../redux/slices/CounterSlice';
const Cards = ({data}) => {
  const navigate = useNavigate();
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

    

    const { discounts,previewImage, title, price } = data;
  return (
    <div className='product-card'>
    
    <div className='card-discount-percentage'>
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
    </div>
  </div>
  )
}

export default Cards