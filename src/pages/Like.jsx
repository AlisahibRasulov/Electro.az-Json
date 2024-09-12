import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeLike,

} from "../redux/slices/addToLikeSlice";
import { DecrementMinusIcon, DeletedIcon, IncrementPlusIcon } from "../svg";

import SadEmoji from "../img/products/free-sad-face-icon-2691-thumb.png";

const Basket = ({ data }) => {
  const navigate = useNavigate();

  const likeItems = useSelector((state) => state.like);
  const likeCount = useSelector((state) => state.like.length);
  const [totalPrices, setTotalPrices] = useState(0);
  const [selectedItems, setSelectedItems] = useState(
    likeItems.map((data) => data.id)
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
    const allProductIds = likeItems.map((data) => data.id);

    // Eğer tüm ürünler zaten seçiliyse, hepsini seçmek yerine hepsini kaldır
    if (selectedItems.length === allProductIds.length) {
      setSelectedItems([]);
    } else {
      // Değilse, tüm ürünleri seç
      setSelectedItems(allProductIds);
    }
  };

  const handleAllDeletedToLike = () => {
    selectedItems.forEach((productId) => {
      dispatch(removeLike(productId));
    });
    setSelectedItems([]); // Clear the selection after deletion
  };
  const handleDeletedToLike = (productId) => {
    dispatch(removeLike(productId));
  };

  // const handleIncrement = (productId) => {
  //   dispatch(incrementQuantity(productId));
  // };

  // const handleDecrement = (productId) => {
  //   dispatch(decrementQuantity(productId));
  // };
  useEffect(() => {
    let sumOfPrice = 0;

    likeItems.map((data) => {
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
  }, [likeItems, selectedItems]);

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
    <div className="like">
      <div className="container-fluid flex justify-center items-center">

      {likeItems.length > 0 ? (
        <div className="like-content">
          <div className="like-top w-full">
          <div className="flex justify-around py-[20px] text-[#fff] bg-red-700">
                {/* <li></li> */}
                <li>Məhsul</li>
                <li>Say</li>
                <li>Qiymət</li>
                {/* <li></li> */}
              </div>
            {/* <tbody> */}
              {likeItems.map((data) => {
                return (
                  <div>
                  <div className="hidden 2xs:flex xs:flex sm:flex justify-between bg-[#fff] border-b-[1px] p-[20px]">
                  <input
                      className="selected-checkbox"
                      type="checkbox"
                      checked={selectedItems.includes(data.id)}
                      onChange={() => handleCheckboxChange(data.id)}
                    />
                    <button
                      className="delete-btn"
                      onClick={() => handleDeletedToLike(data.id)}
                    >
                      <DeletedIcon />
                    </button>
                  </div>
                  <div className="hidden 2xs:flex xs:flex sm:flex justify-center bg-[#fff]">
                    <p className="data-title font-[600] xs:text-[13px]">{data.title}</p>
                  </div>
                    <div className="flex justify-between border-b px-[10px] py-[10px] mb-3 shadow-sm bg-[#fff]" key={data.id}>
                      <div className="flex items-center 2xs:hidden xs:hidden sm:hidden">
                        <input
                          className="selected-checkbox"
                          type="checkbox"
                          checked={selectedItems.includes(data.id)}
                          onChange={() => handleCheckboxChange(data.id)}
                        />
                      </div>
                      {/* <td> */}
                        <div className="product-image flex flex-[1] items-center ml-[30px] w-[600px]  md:flex-[3] lg:flex-[2] xl:flex-[2]">
                          <img
                            className="data-img w-[100px]"
                            src={
                              data.previewImage
                                ? data.previewImage
                                : data.images && data.images[0]
                                ? data.images[0].imagePath
                                : ""
                            }
                            alt=""
                          />
                          <p className="data-title  2xs:hidden xs:hidden sm:hidden">{data.title}</p>
                        </div>
                      {/* </td> */}
                      {/* <td> */}
                        {/* <div className="counter-quantity flex items-center justify-center flex-1">
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
                        </div> */}
                      {/* </td> */}
                      {/* <td> */}
                        {data.discounts[0]?.currentPrice ? (
                          <div className="flex flex-col items-center justify-center flex-1">
                            <del>
                              <div className="data-price text-[#666] font-[600]" style={dataPrice}>
                                {(data.price * data.quantity).toLocaleString(
                                  "az-AZ"
                                )}
                                ₼
                              </div>
                            </del>
                            <div className="data-discount-price text-[#D10024] font-[600]">
                              {(
                                data.discounts[0].currentPrice * data.quantity
                              ).toLocaleString("az-AZ")}
                              ₼
                            </div>
                          </div>
                        ) : (
                          <div className="data-price flex items-center justify-center flex-1 text-[#666] font-[600]">
                            {(data.price * data.quantity).toLocaleString("az-AZ")}{" "}
                            ₼
                          </div>
                        )}
                      {/* </td> */}
                      <div className="flex items-center justify-center 2xs:hidden xs:hidden sm:hidden">
                        <button
                          className="delete-btn"
                          onClick={() => handleDeletedToLike(data.id)}
                        >
                          <DeletedIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            {/* </tbody> */}
          </div>
          <div className="like-bottom">
            <div className="like-bottom_1">
              <button className="selectall-btn" onClick={handleSelectAll}>
                Hamısını Seç
              </button>
              <button className="clear-btn" onClick={handleAllDeletedToLike}>
                Seçilənləri sil
              </button>
            </div>
            <div className="like-bottom_2">
              <div className="total-quantity">
                Səbət <span>({likeCount} məhsul)</span>
              </div>
              <div className="total-price">
                Yekun məbləğ: <span>{totalPrices} ₼</span>
              </div>
            </div>
            <div className="like-bottom_3">
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
    </div>
  );
};

export default Basket;
