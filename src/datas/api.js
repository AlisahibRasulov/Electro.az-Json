const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://aliexpress-datahub.p.rapidapi.com/item_detail',
  params: {
    itemId: '3256804591426248'
  },
  headers: {
    'X-RapidAPI-Key': 'e3faa557b1mshd0a5b5dc0ca8e2dp16a047jsna88ed361219f',
    'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
  }
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

// const axios = require('axios');

const options1 = {
  method: 'GET',
  url: 'https://aliexpress-datahub.p.rapidapi.com/item_detail_2',
  params: {
    itemId: '3256804591426248'
  },
  headers: {
    'X-RapidAPI-Key': 'e3faa557b1mshd0a5b5dc0ca8e2dp16a047jsna88ed361219f',
    'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options1);
	console.log(response.data);
} catch (error) {
	console.error(error);
}