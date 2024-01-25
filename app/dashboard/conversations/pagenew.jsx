// pages/page.jsx
"use client";
import React from 'react';
import Head from 'next/head';
import Chatbot from '/components/chat/Chatbot';
//import styles from '../components\chat\chatbot.module.css';

const Page = () => {
  return (
    <div>
      {/* <Head>
        <title>Coversations</title>
        
      </Head> */}
      <h1>Your Page Title</h1>
      
      <Chatbot />
    </div>
  );
};

export default Page;
