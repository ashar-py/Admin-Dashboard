const axios = require('axios');

const resetChat = async (message, prefix, phoneNumber) => {
  try {
    const data = JSON.stringify({ "message": message });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://v5ywnvc7ve.execute-api.ap-south-1.amazonaws.com/api/chat/completions?prefix=${prefix}&phone_no=${phoneNumber}`,
      headers: { 'Content-Type': 'application/json' },
      data: data
    };

    const response = await axios.request(config);
    if (response.status !== 200) {
      throw new Error(`Failed to reset chat. Status: ${response.status}`);
    }
    return response.data; // Assuming the required data is directly in the response
  } catch (error) {
    console.error('Error calling the API:', error);
    throw new Error('Failed to reset chat. Please try again later.');
  }
};

module.exports = {
  resetChat,
};
