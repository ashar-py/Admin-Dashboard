// activeUsers.js

const axios = require('axios');

const fetchActiveUsers = async () => {
  try {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://rhd4lozcs6.execute-api.us-east-1.amazonaws.com/api/active/list',
      headers: {
        'prefix': 'bimahublife'
      }
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error('Error fetching active users:', error);
    throw error;
  }
};

module.exports = {
  fetchActiveUsers,
};
