import React, { useEffect, useRef } from 'react';

const ChatList = ({ messages }) => {
  const chatListRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chatlist" ref={chatListRef}>
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
