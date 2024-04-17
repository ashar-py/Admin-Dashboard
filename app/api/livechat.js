
const axios = require('axios');

const callApi = async (message, prefix, phoneNumber) => {
  try {
    const data = JSON.stringify({
      "message": message  
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://v5ywnvc7ve.execute-api.ap-south-1.amazonaws.com/api/chat/completions?prefix=trinimocer&phone_no=911234500001`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    };

    const response = await axios.request(config);
    return response.data.data; // Adjust this line to extract the correct property from the API response
  } catch (error) {
    console.error('Error calling the API:', error);
    throw error;
  }
};

module.exports = {
  callApi,
};

