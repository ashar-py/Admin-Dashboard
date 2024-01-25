// pages/api/ai.js
"use client";
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      // You need to replace 'YOUR_AI_API_ENDPOINT' with the actual API endpoint of your AI service
      const response = await axios.post('YOUR_AI_API_ENDPOINT', { message });
      const botReply = response.data.reply;

      res.status(200).json({ reply: botReply });
    } catch (error) {
      console.error('Error communicating with the AI:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
