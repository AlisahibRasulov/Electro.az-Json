const allProductData = [
  {
    "id": 1,
    "title": "Notbuk HP 14S-DQ5005CI (6J309EA)",
    "price": 1789,
    "discounts": [],
    "rating": {
      "id": 2,
      "rating": "4.5",
      "count": "332"
    },
    "previewImage": "../images/products/Notebook/Product 1/1.png"
  },
  {
    "id": 22,
    "title": "Disk Playstation 5 (Call Of Duty Modern Warfare 3)",
    "price": 99.99,
    "discounts": [
      {
        "id": 16,
        "currentPrice": 89.99,
        "discountAmount": "10₼"
      }
    ],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../images/products/Oyunlar/Product2/1.png"
  },
  {
    "id": 9,
    "title": "iPhone 14 Pro Max 256 GB Space Black",
    "price": 3339.99,
    "discounts": [],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../images/products/Smartfonlar/Product 1/1.png"
  },
  {
    "id": 2,
    "title": "Notbuk Acer Aspire 3 A315-59 Slim (NX.K6SER.00P)",
    "price": 1200,
    "discounts": [
      {
        "id": 2,
        "currentPrice": 900,
        "discountAmount": "300₼"
      }
    ],
    "rating": {
      "id": 2,
      "rating": "4.5",
      "count": "332"
    },
    "previewImage": "../images/products/Notebook/Product 2/1.png"
  },
  {
    "id": 15,
    "title": "Nikon D3500 + AF-P 18-55 VR Kit",
    "price": 1200,
    "discounts": [
      {
        "id": 4,
        "currentPrice": 900,
        "discountAmount": "300₼"
      }
    ],
    "rating": {
      "id": 2,
      "rating": "4.5",
      "count": "332"
    },
    "previewImage": "../images/products/Fotoaparatlar/Product 1/1.png"
  },
  {
    "id": 23,
    "title": "Xbox Controller Carbon Black",
    "price": 179.99,
    "discounts": [],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../images/products/Oyunlar/Product3/1.png"
  },
  {
    "id": 26,
    "title": "Disk PS5 Street Fighter 6 1397678",
    "price": 99.99,
    "discounts": [],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../images/products/Oyunlar/Product6/1.png"
  },
  {
    "id": 3,
    "title": "Notbuk Lenovo IdeaPad 5 15ITL05 (82FG00D0RK)",
    "price": 1490,
    "discounts": [],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../images/products/Notebook/Product 3/1.png"
  },
  {
    "id": 17,
    "title": "Canon EOS R6 + RF 24-105 F/4.0-7.1 IS STM",
    "price": 6119,
    "discounts": [],
    "rating": {
      "id": 5,
      "rating": "3.9",
      "count": "329"
    },
    "previewImage": "../images/products/Fotoaparatlar/Product 3/1.png"
  },
  {
    "id": 4,
    "title": "Notbuk Dell Latitude 5530 210-BDJK_I7",
    "price": 2899,
    "discounts": [
      {
        "id": 3,
        "currentPrice": 2400,
        "discountAmount": "499₼"
      }
    ],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../images/products/Notebook/Product 4/1.png"
  },
  {
    "id": 27,
    "title": "SONY inzone H7 wireless gaming",
    "price": 19.99,
    "discounts": [],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../images/products/Aksesuarlar/Product1/1.png",
  },
  {
    "id": 5,
    "title": "Notbuk Asus Vivobook 15x Oled M1503QA-ES52 (90NB0Y91-M00220)",
    "price": 2119,
    "discounts": [],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../images/products/Notebook/Product 5/1.png"
  },
  {
    "id": 14,
    "title": "HUAWEI Nova Y70 4/128 GB Midnight Blackt)",
    "price": 499.99,
    "discounts": [],
    "rating": {
      "id": 5,
      "rating": "3.9",
      "count": "329"
    },
    "previewImage": "../images/products/Smartfonlar/Product 6/1.png"
  },
  {
    "id": 18,
    "title": "Canon EOS R8+Lens RF24-50 F4.5-6.3 IS STM (5803C016)",
    "price": 4900,
    "discounts": [
      {
        "id": 5,
        "currentPrice": 3900,
        "discountAmount": "1000₼"
      }
    ],
    "rating": {
      "id": 5,
      "rating": "3.9",
      "count": "329"
    },
    "previewImage": "../images/products/Fotoaparatlar/Product 4/1.png"
  },
  {
    "id": 6,
    "title": "Notbuk Huawei MateBook D 15 Gray (53013PAB)",
    "price": 1399,
    "discounts": [],
    "rating": {
      "id": 5,
      "rating": "3.9",
      "count": "329"
    },
    "previewImage": "../images/products/Notebook/Product 6/1.png"
  },
  {
    "id": 10,
    "title": "Samsung Galaxy S23 (SM-S911B) 8/256 GB Green",
    "price": 2100,
    "discounts": [
      {
        "id": 10,
        "currentPrice": 1890,
        "discountAmount": "210₼"
      }
    ],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../images/products/Smartfonlar/Product 2/1.png"
  },
  {
    "id": 24,
    "title": "Defender Challenge Mini LE Wheel",
    "price": 149.99,
    "discounts": [
      {
        "id": 17,
        "currentPrice": 139.99,
        "discountAmount": "10₼"
      }
    ],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../images/products/Oyunlar/Product4/1.png"
  },
  {
    "id": 13,
    "title": "Samsung Galaxy Z Fold 4 12/256 GB Gray Green (F936)",
    "price": 2849.99,
    "discounts": [],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../images/products/Smartfonlar/Product 5/1.png"
  },
  {
    "id": 16,
    "title": "Nikon Z50 16-50mm VR kit",
    "price": 2199,
    "discounts": [],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../images/products/Fotoaparatlar/Product 2/1.png"
  },
  {
    "id": 7,
    "title": "Noutbuk Apple MacBook Pro 16 MK183RU/A Space Gray",
    "price": 5699.99,
    "discounts": [
      {
        "id": 13,
        "currentPrice": 4269.99,
        "discountAmount": "1430₼"
      }
    ],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../images/products/Notebook/Product 7/1.png"
  },
  {
    "id": 25,
    "title": "PlayStation VR2",
    "price": 1209.99,
    "discounts": [],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../images/products/Oyunlar/Product5/1.png"
  },
  {
    "id": 28,
    "title": "SBS Charging Station 200W GaN",
    "price": 249.99,
    "discounts": [
      {
        "id": 15,
        "currentPrice": 199.99,
        "discountAmount": "50₼"
      }
    ],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../images/products/Aksesuarlar/Product2/1.png"
  },
  {
    "id": 19,
    "title": "Sony Alpha 7S III ILCE-7SM3",
    "price": 9299,
    "discounts": [],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../images/products/Fotoaparatlar/Product 5/1.jpg"
  },
  {
    "id": 31,
    "title": "Qulaqlıq HUAWEI FreeBuds Pro 3 Silver Frost",
    "price": 369.99,
    "discounts": [],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../images/products/Aksesuarlar/Product5/1.png"
  },
  {
    "id": 11,
    "title": "iPhone 14 Plus 512 GB Blue",
    "price": 3189.99,
    "discounts": [],
    "rating": {
      "id": 2,
      "rating": "4.5",
      "count": "332"
    },
    "previewImage": "../images/products/Smartfonlar/Product 3/1.png"
  },
  {
    "id": 8,
    "title": "Notbuk Apple Macbook Pro 14 MPHH3RU/A Silver",
    "price": 5399.99,
    "discounts": [
      {
        "id": 14,
        "currentPrice": 4849.99,
        "discountAmount": "550₼"
      }
    ],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../images/products/Notebook/Product 8/1.png"
  },
  {
    "id": 29,
    "title": "Gaming Keyboard Razer Huntsman Tournament Ed",
    "price": 199.99,
    "discounts": [],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../images/products/Aksesuarlar/Product3/1.png"
  },
  {
    "id": 32,
    "title": "Lens Canon RF 70-200MM F4 L IS USM",
    "price": 4499.99,
    "discounts": [
      {
        "id": 15,
        "currentPrice": 3999.99,
        "discountAmount": "20%"
      }
    ],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../images/products/Aksesuarlar/Product6/1.png"
  },
  {
    "id": 12,
    "title": "Xiaomi Redmi Note 12 8/256 GB Ice Blue",
    "price": 600,
    "discounts": [
      {
        "id": 11,
        "currentPrice": 480,
        "discountAmount": "120₼"
      }
    ],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../images/products/Smartfonlar/Product 4/1.png"
  },
  {
    "id": 21,
    "title": "Sony PlayStation 5 825 GB",
    "price": 1199.99,
    "discounts": [],
    "rating": {
      "id": 4,
      "rating": "4.9",
      "count": "554"
    },
    "previewImage": "../images/products/Oyunlar/Product1/1.png"
  },
  {
    "id": 20,
    "title": "Sony Alpha ILCE-7C",
    "price": 4799,
    "discounts": [
      {
        "id": 7,
        "currentPrice": 4099,
        "discountAmount": "700₼"
      }
    ],
    "rating": {
      "id": 5,
      "rating": "3.9",
      "count": "329"
    },
    "previewImage": "../images/products/Fotoaparatlar/Product 6/1.png"
  },
  {
    "id": 30,
    "title": "Powerbank Anker 622 Magnetic Battery Black",
    "price": 99.99,
    "discounts": [],
    "rating": {
      "id": 3,
      "rating": "4.8",
      "count": "312"
    },
    "previewImage": "../images/products/Aksesuarlar/Product4/1.png"
  },  
]

export default allProductData