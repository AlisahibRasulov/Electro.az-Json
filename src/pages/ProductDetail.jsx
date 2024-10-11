import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import productIdData from "../Json/product-deail/product-by-id";

const ProductDetail = () => {
  const [cardDetails, setCardDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const product = productIdData.find((item) => item.id === parseInt(id));

    if (product) {
      setCardDetails([product]);
    } else {
      setCardDetails([]);
    }

    setLoading(false);
  }, [id]);

  return (
    <div className="card-detail">
      <div className="container">
        <div className="card-content">
          {loading ? (
            <p>Loading...</p>
          ) : (
            cardDetails.map((item) => <DetailCard key={item.id} data={item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
