

import axios from 'axios';

export const fetchUserInfo = async (phoneNumber, prefix) => { // Accept prefix parameter
    try {
        const response = await axios.get(`https://rhd4lozcs6.execute-api.us-east-1.amazonaws.com/api/chatDetails?phone_no=${phoneNumber}&prefix=${prefix}`, { // Include prefix in the URL
            headers: {
                'prefix': prefix, // Set prefix in the headers
            },
        });
        return response.data; 
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};
