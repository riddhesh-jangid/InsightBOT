import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';

const ChatList = ({ messages }) => {
  const chatListRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
  }, [messages]);

  // return (
  //   <div className="chatlist" ref={chatListRef}>
  //     {messages.map((msg, index) => (
  //       <div key={index} className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
  //         {msg.text}
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <Box
      className='chatpage'
      ref={chatListRef}
      sx={{
        flex: 1,
        padding: '1rem',
        overflowY: 'auto',
        borderBottom: '1px solid #ddd',
        height: 'calc(100vh - 100px)', // Adjust as needed for your layout
      }}
    >
      {messages.map((msg, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            marginBottom: '0.5rem',
          }}
          id='padding-between-chat'
        >
          <Box
            class="chat-message-container"
            sx={{
              padding: '0.5rem',
              borderBottom: '1px solid #eee',
              borderRadius: '8px',
              wordWrap: 'break-word',
              display: 'inline-block',
              maxWidth: msg.sender === 'user' ? '50%' : '70%',
              backgroundColor: msg.sender === 'user' ? '#dcf8c6' : '#f1f0f0',
              textAlign: msg.sender === 'user' ? 'right' : 'left',
              whiteSpace: 'pre-wrap', // Preserves whitespace and breaks lines
            }}
          >
            <Typography class='chat-message' variant="body1">{msg.text}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );

};

export default ChatList;
