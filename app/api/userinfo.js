import axios from 'axios';

export const fetchUserInfo = async (phoneNumber) => {
    try {
        const response = await axios.get(`https://rhd4lozcs6.execute-api.us-east-1.amazonaws.com/api/chatDetails?phone_no=${phoneNumber}&prefix=bimakartbike`, {
           
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};
