import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import { Box } from '@mui/material';

const ChatBox = () => {
  const bot_response = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  const [messages, setMessages] = useState([]);
  const [isImageVisible, setImageVisible] = useState(true);

  // append a message in messages array
  // {sender: '', text: ''} is one element in messages array
  const addMessage = (text) => {
    if (isImageVisible) {
      setImageVisible(false);
    }
    setMessages([...messages, { sender: 'user', text 
    }]);

    
    // RACTION: Here you need to send the token to the backend 
    // Wait for the response and add the response in messages array
    // if more than one response is coming then use loop to add 

    // setTimeout(() => {
    //   setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: bot_response }]);
    // }, 1000);

    const apiKey = "gLSFji9inDPPZo2ZvKmpKzeNy8AXGIT7";
    const requestBody = {'user_query':""}; 

    fetch('https://hackfest-cb-end-2.westus.inference.ml.azure.com/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: data.summary }]);
      })
      .catch(error => {
        console.error('Error fetching the cat fact:', error);
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Sorry, something went wrong!' }]);
      });
     

    // fetch('https://catfact.ninja/fact')
    //   .then(response => response.json())
    //   .then(data => {
    //     setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: data.fact }]);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching the cat fact:', error);
    //     setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Sorry, something went wrong!' }]);
    //   });

  };

  return (
    // <div className="chatbox">
    //   <ChatList messages={messages} />
    //   <ChatInput addMessage={addMessage} />
    // </div>
    <Box  className='imagecenter' sx={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {isImageVisible && (
        // <Box className='imagecenter'>
          <img src="https://insightbotadls.blob.core.windows.net/sitecontent/imagecenter.png" alt="Placeholder" />
        // </Box>
      )}
      <ChatList messages={messages} />
      <ChatInput addMessage={addMessage} />
    </Box>
  );
};

export default ChatBox;
