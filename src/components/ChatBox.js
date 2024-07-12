import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatInput from './ChatInput';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    setMessages([...messages, { sender: 'user', text }]);
    // Simulate bot response
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'This is a bot response.' }]);
    }, 1000);
  };

  return (
    <div className="chatbox">
      <ChatList messages={messages} />
      <ChatInput addMessage={addMessage} />
    </div>
  );
};

export default ChatBox;
