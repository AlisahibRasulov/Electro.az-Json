import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeBasket,
  removeBasketAll,
  resetButtonState,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/addToBasketSlice";
import { DecrementMinusIcon, DeletedIcon, IncrementPlusIcon } from "../svg";

import SadEmoji from "../img/products/free-sad-face-icon-2691-thumb.png";

const Basket = ({ data }) => {
  const navigate = useNavigate();

  const basketItems = useSelector((state) => state.basket);
  const basketCount = useSelector((state) => state.basket.length);
  const [totalPrices, setTotalPrices] = useState(0);
  const [selectedItems, setSelectedItems] = useState(
    basketItems.map((data) => data.id)
  );

  const dispatch = useDispatch();

  const handleCheckboxChange = (productId) => {
    // Check if the item is already selected
    const isSelected = selectedItems.includes(productId);

    if (isSelected) {
      // If selected, remove it from the list
      setSelectedItems(selectedItems.filter((id) => id !== productId));
    } else {
      // If not selected, add it to the list
      setSelectedItems([...selectedItems, productId]);
    }
  };

  const handleSelectAll = () => {
    // Tüm ürün kimliklerini içeren bir dizi
    const allProductIds = basketItems.map((data) => data.id);

    // Eğer tüm ürünler zaten seçiliyse, hepsini seçmek yerine hepsini kaldır
    if (selectedItems.length === allProductIds.length) {
      setSelectedItems([]);
    } else {
      // Değilse, tüm ürünleri seç
      setSelectedItems(allProductIds);
    }
  };

  const handleAllDeletedToBasket = () => {
    selectedItems.forEach((productId) => {
      dispatch(removeBasket(productId));
    });
    setSelectedItems([]); // Clear the selection after deletion
  };
  const handleDeletedToBasket = (productId) => {
    dispatch(removeBasket(productId));
  };

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };
  useEffect(() => {
    let sumOfPrice = 0;

    basketItems.map((data) => {
      let checkBoxId = data.id;
      if (selectedItems.includes(checkBoxId)) {
        if (data.discounts && data.discounts.length > 0) {
          sumOfPrice += data.discounts[0].currentPrice * data.quantity;
        } else {
          sumOfPrice += data.price * data.quantity;
        }
      }
    });

    let sumOfPrices = sumOfPrice.toLocaleString("az-AZ");
    setTotalPrices(sumOfPrices);
  }, [basketItems, selectedItems]);

  const orderBtn = () => {
    if (localStorage.getItem("login") === "true") {
      console.log("here is working");
      alert("Ugurlu emeliyyat");
    } else {
      navigate("/login");
    }
  };
  const dataPrice = {
    fontSize: "14px",
  };

  return (
    <div className="basket">
      {basketItems.length > 0 ? (
        <div className="basket-content">
          <table className="basket-top">
            <thead>
              <tr>
                <th></th>
                <th>Məhsul</th>
                <th>Say</th>
                <th>Qiymət</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {basketItems.map((data) => {
                return (
                  <tr className="sm:flex sm:flex-col" key={data.id}>
                    <td>
                      <input
                        className="selected-checkbox"
                        type="checkbox"
                        checked={selectedItems.includes(data.id)}
                        onChange={() => handleCheckboxChange(data.id)}
                      />
                    </td>

                    <td>
                      <div className="product">
                        <img
                          className="data-img"
                          src={
                            data.previewImage
                              ? data.previewImage
                              : data.images && data.images[0]
                              ? data.images[0].imagePath
                              : ""
                          }
                          alt=""
                        />
                        <p className="data-title">{data.title}</p>
                      </div>
                    </td>
                    <td>
                      <div className="counter-quantity">
                        <button
                          className="counter-quantity_btn"
                          onClick={() => handleDecrement(data.id)}
                        >
                          <DecrementMinusIcon />
                        </button>
                        <div className="data-quantity">{data.quantity}</div>
                        <button
                          className="counter-quantity_btn"
                          onClick={() => handleIncrement(data.id)}
                        >
                          {" "}
                          <IncrementPlusIcon />
                        </button>
                      </div>
                    </td>
                    <td>
                      {data.discounts[0]?.currentPrice ? (
                        <>
                          <del>
                            <div className="data-price" style={dataPrice}>
                              {(data.price * data.quantity).toLocaleString(
                                "az-AZ"
                              )}
                              ₼
                            </div>
                          </del>
                          <div className="data-discount-price">
                            {(
                              data.discounts[0].currentPrice * data.quantity
                            ).toLocaleString("az-AZ")}
                            ₼
                          </div>
                        </>
                      ) : (
                        <div className="data-price">
                          {(data.price * data.quantity).toLocaleString("az-AZ")}{" "}
                          ₼
                        </div>
                      )}
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeletedToBasket(data.id)}
                      >
                        <DeletedIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="basket-bottom">
            <div className="basket-bottom_1">
              <button className="selectall-btn" onClick={handleSelectAll}>
                Hamısını Seç
              </button>
              <button className="clear-btn" onClick={handleAllDeletedToBasket}>
                Seçilənləri sil
              </button>
            </div>
            <div className="basket-bottom_2">
              <div className="total-quantity">
                Səbət <span>({basketCount} məhsul)</span>
              </div>
              <div className="total-price">
                Yekun məbləğ: <span>{totalPrices} ₼</span>
              </div>
            </div>
            <div className="basket-bottom_3">
              <div className="complete-order">
                <button onClick={orderBtn} className="complete-btn">
                  Sifarişi yekunlaşdır
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="clear-page">
          <img className="clear-emoji" src={SadEmoji} alt="" />
          <p className="clear-text">Səbətinizdə məhsul yoxdur</p>
          <button className="home-btn" onClick={() => navigate(`/`)}>
            Alış-verişə Başla
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;
