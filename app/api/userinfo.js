const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://rhd4lozcs6.execute-api.us-east-1.amazonaws.com/api/chatDetails?phone_no=917020416442&prefix=bimakartbike',
  headers: { 
    'prefix': 'bimahublife'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});