const allProductData = [
  {
    "id": 2,
    "title": "Notbuk HP 14S-DQ5005CI (6J309EA)",
    "price": 1789,
    "discounts": [],
    "rating": {
      "id": 2,
      "rating": "4.5",
      "count": "332"
    },
    "previewImage": "../img/products/Notebook/Product 1/1.png"
  },
  {
    "id": 3,
    "title": "Notbuk Acer Aspire 3 A315-59 Slim (NX.K6SER.00P)",
    "price": 1200,
    "discounts": [
      {
        "id": 2,
        "currentPrice": 900,
        "discountPercentage": "25%"
      }
    ],
    "rating": {
      "id": 2,
      "rating": "4.5",
      "count": "332"
    },
    "previewImage": "../img/products/Notebook/Product 2/1.png"
  },
  {
    "id": 4,
    "title": "Notbuk Lenovo IdeaPad 5 15ITL05 (82FG00D0RK)",
    "price": 1490,
    "discounts": [],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../img/products/Notebook/Product 3/1.png"
  },
  {
    "id": 5,
    "title": "Notbuk Dell Latitude 5530 210-BDJK_I7",
    "price": 2899,
    "discounts": [
      {
        "id": 3,
        "currentPrice": 2400,
        "discountPercentage": "17%"
      }
    ],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../img/products/Notebook/Product 4/1.png"
  },
  {
    "id": 6,
    "title": "Notbuk Asus Vivobook 15x Oled M1503QA-ES52 (90NB0Y91-M00220)",
    "price": 2119,
    "discounts": [],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../img/products/Notebook/Product 5/1.png"
  },
  {
    "id": 7,
    "title": "Notbuk Huawei MateBook D 15 Gray (53013PAB)",
    "price": 1399,
    "discounts": [],
    "rating": {
      "id": 5,
      "rating": "3.9",
      "count": "329"
    },
    "previewImage": "../img/products/Notebook/Product 6/1.png"
  },
  {
    "id": 8,
    "title": "Nikon D3500 + AF-P 18-55 VR Kit",
    "price": 1200,
    "discounts": [
      {
        "id": 4,
        "currentPrice": 900,
        "discountPercentage": "25%"
      }
    ],
    "rating": {
      "id": 2,
      "rating": "4.5",
      "count": "332"
    },
    "previewImage": "../img/products/Fotoaparatlar/Product 1/1.png"
  },
  {
    "id": 9,
    "title": "Nikon Z50 16-50mm VR kit",
    "price": 2199,
    "discounts": [],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../img/products/Fotoaparatlar/Product 2/1.png"
  },
  {
    "id": 10,
    "title": "Canon EOS R6 + RF 24-105 F/4.0-7.1 IS STM",
    "price": 6119,
    "discounts": [],
    "rating": {
      "id": 5,
      "rating": "3.9",
      "count": "329"
    },
    "previewImage": "../img/products/Fotoaparatlar/Product 3/1.png"
  },
  {
    "id": 11,
    "title": "Canon EOS R8+Lens RF24-50 F4.5-6.3 IS STM (5803C016)",
    "price": 4900,
    "discounts": [
      {
        "id": 5,
        "currentPrice": 3920,
        "discountPercentage": "20%"
      }
    ],
    "rating": {
      "id": 5,
      "rating": "3.9",
      "count": "329"
    },
    "previewImage": "../img/products/Fotoaparatlar/Product 4/1.png"
  },
  {
    "id": 12,
    "title": "Sony Alpha 7S III ILCE-7SM3",
    "price": 9299,
    "discounts": [],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../img/products/Fotoaparatlar/Product 5/1.png"
  },
  {
    "id": 13,
    "title": "Sony Alpha ILCE-7C",
    "price": 4799,
    "discounts": [
      {
        "id": 7,
        "currentPrice": 4099,
        "discountPercentage": "14%"
      }
    ],
    "rating": {
      "id": 5,
      "rating": "3.9",
      "count": "329"
    },
    "previewImage": "../img/products/Fotoaparatlar/Product 6/1.png"
  },
  {
    "id": 16,
    "title": "iPhone 14 Pro Max 256 GB Space Black",
    "price": 3339.99,
    "discounts": [],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../img/products/Smartfonlar/Product 1/1.png"
  },
  {
    "id": 19,
    "title": "Samsung Galaxy S23 (SM-S911B) 8/256 GB Green",
    "price": 2100,
    "discounts": [
      {
        "id": 10,
        "currentPrice": 1890,
        "discountPercentage": "10%"
      }
    ],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../img/products/Smartfonlar/Product 2/1.png"
  },
  {
    "id": 21,
    "title": "iPhone 14 Plus 512 GB Blue",
    "price": 3189.99,
    "discounts": [],
    "rating": {
      "id": 2,
      "rating": "4.5",
      "count": "332"
    },
    "previewImage": "../img/products/Smartfonlar/Product 3/1.png"
  },
  {
    "id": 24,
    "title": "Xiaomi Smart Band 7 Black BHR6008GL",
    "price": 79.99,
    "discounts": [],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../img/products/Aksesuarlar/Product 1/1.png"
  },
  {
    "id": 25,
    "title": "Xiaomi Redmi Note 12 8/256 GB Ice Blue",
    "price": 600,
    "discounts": [
      {
        "id": 11,
        "currentPrice": 480,
        "discountPercentage": "20%"
      }
    ],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../img/products/Smartfonlar/Product 4/1.png"
  },
  {
    "id": 28,
    "title": "Samsung Galaxy Z Fold 4 12/256 GB Gray Green (F936)",
    "price": 2849.99,
    "discounts": [],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../img/products/Smartfonlar/Product 5/1.png"
  },
  {
    "id": 29,
    "title": "HUAWEI Nova Y70 4/128 GB Midnight Blackt)",
    "price": 499.99,
    "discounts": [],
    "rating": {
      "id": 5,
      "rating": "3.9",
      "count": "329"
    },
    "previewImage": "../img/products/Smartfonlar/Product 6/1.png"
  },
  {
    "id": 31,
    "title": "Noutbuk Apple MacBook Pro 16 MK183RU/A Space Gray",
    "price": 5699.99,
    "discounts": [
      {
        "id": 13,
        "currentPrice": 4269.99,
        "discountPercentage": "25%"
      }
    ],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../img/products/Notebook/Product 7/1.png"
  },
  {
    "id": 32,
    "title": "Notbuk Apple Macbook Pro 14 MPHH3RU/A Silver",
    "price": 5399.99,
    "discounts": [
      {
        "id": 14,
        "currentPrice": 4849.99,
        "discountPercentage": "10%"
      }
    ],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../img/products/Notebook/Product 8/1.png"
  },
  {
    "id": 33,
    "title": "Sony INZONE H9 Wireless Gaming NC / WH-G900N",
    "price": 499.99,
    "discounts": [
      {
        "id": 15,
        "currentPrice": 409.99,
        "discountPercentage": "18%"
      }
    ],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "http://34.125.216.115:9095/api/image/90"
  },
  {
    "id": 34,
    "title": "Iphone 15 Pro Max case Silicone Vu Case Clear",
    "price": 14.99,
    "discounts": [],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "http://34.125.216.115:9095/api/image/93"
  },
  {
    "id": 35,
    "title": "Samsung USB-C Port 25W EP-T2510NWEGRU White",
    "price": 39.99,
    "discounts": [],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "http://34.125.216.115:9095/api/image/94"
  },
  {
    "id": 36,
    "title": "Xiaomi Mi 3 Ultra 10000 mAh (PB1022ZM) BHR4412GL Black",
    "price": 49.99,
    "discounts": [],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "http://34.125.216.115:9095/api/image/96"
  },
  {
    "id": 37,
    "title": "Apple Airpods Max Silver MGYJ3RU/A",
    "price": 1.549,
    "discounts": [],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "http://34.125.216.115:9095/api/image/99"
  },
  {
    "id": 38,
    "title": "Apple Airpods Pro 2nd Generation",
    "price": 669.99,
    "discounts": [],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "http://34.125.216.115:9095/api/image/102"
  },
  {
    "id": 39,
    "title": "HUAWEI Band 8 Midnight Black / 55020ANM",
    "price": 109.99,
    "discounts": [],
    "rating": {
      "id": 2,
      "rating": "4.5",
      "count": "332"
    },
    "previewImage": "http://34.125.216.115:9095/api/image/105"
  },
  {
    "id": 40,
    "title": "Sony PlayStation 5 825 GB",
    "price": 1199.99,
    "discounts": [],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "http://34.125.216.115:9095/api/image/110"
  },
  {
    "id": 41,
    "title": "Stray - PlayStation 5",
    "price": 99.99,
    "discounts": [
      {
        "id": 16,
        "currentPrice": 89.99,
        "discountPercentage": "10%"
      }
    ],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "http://34.125.216.115:9095/api/image/114"
  },
  {
    "id": 42,
    "title": "Canyon GP-W5 for PS4 Gamepad Wireless CND-GPW5 Black",
    "price": 59.99,
    "discounts": [],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "http://34.125.216.115:9095/api/image/118"
  },
  {
    "id": 43,
    "title": "Sony PlayStation 5 DualSense White",
    "price": 149.99,
    "discounts": [
      {
        "id": 17,
        "currentPrice": 139.99,
        "discountPercentage": "6%"
      }
    ],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "http://34.125.216.115:9095/api/image/122"
  }
]

export default allProductData