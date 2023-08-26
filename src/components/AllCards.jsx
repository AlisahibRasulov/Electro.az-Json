// import { useState } from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// const ProductCard = ({ card }) => {
//   const [expanded, setExpanded] = useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const { id, title, image, description, price, category, rating } = card;

//   console.log(rating);

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             {title?.slice(0, 1)}
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={category}
//         subheader={price + " " + "$"}
//       />
//       <CardMedia component="img" height="194" image={image} alt="Paella dish" />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           {title}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           {rating?.rate}
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />

//           {rating?.count}
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>{description}</Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// };

// export default ProductCard;

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
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

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

// export default function RecipeReviewCard() {
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
//             <MoreVertIcon />
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
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
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

import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';

// import { useParams } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import Button from "./Button";
import {CardLikeHeartIcon} from "../svg"

// const options = {
//   method: 'GET',
//   url: 'https://aliexpress-datahub.p.rapidapi.com/item_detail',
//   params: {
//     itemId: '3256804591426248'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'e3faa557b1mshd0a5b5dc0ca8e2dp16a047jsna88ed361219f',
//     'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
//   }
// };
const AllCards = () => {
  const { REACT_APP_BASE_URL } = process.env;
  // const { id } = useParams();
  // const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(()=>{

  
  //  axios.request(options).then((response)=>{
  //   // console.log(response.data.result.seller);
  //   setProductData(response.data.result.seller)
  //  }).catch ((error)=>{
  //     console.error(error);
  //   })


    axios("http://localhost:3009/get-data").then((res)=>{
      // console.log(res.data.data) 
      setProductData(res.data.data)
    })
    // fetch("https://dummyjson.com/products/1")
    // .then(response => response.json())
    // .then(response => console.log(response));


 
  },[refresh])




  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // GET isteği için axios kullanımı
  //   axios.get("https://dummyjson.com/products")

  //     .then((response) => {
  //       // API'den gelen veriyi state'e kaydet
  //       setProducts(response.data.products);
  //     })
  //     .catch((error) => {
  //       console.error("Hata:", error); 
  //     });
  // }, []);
  // console.log(products)

  // ? Deleted item
  // const deletedItem = (id) =>{
  //   axios.delete(`http://localhost:3009/items/${id}`).then((res)=>{
  //     // setProductData(res.data.data)
  //     setRefresh(!refresh)
  //   })
  //   // console.log(id)
  // }

  return (
    <div className="all-cards">
      <div className="container">
      <div className="all-cards_content">
      {productData.map((item)=>(
        <div className='card'>
        {/* <h2>{item.id}</h2> */}
      <div className="card-view">
        <Button>Add Cart</Button>
        <Button>Details</Button>
        {/* <td><Button onClick={()=>deletedItem(item.id)}>Delete</Button></td>  */}
        <CardLikeHeartIcon/>
      </div>
      <img src={item.image} alt="" />
      <h2>{item.title.slice(0,10)}</h2>
      {/* <p>{item.price}Azn</p> */}
        </div>
      
      ))}
    </div>
    </div>
    </div>
    
    
  );
};

export default AllCards;