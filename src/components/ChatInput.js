import React, { useState } from 'react';

const ChatInput = ({ addMessage }) => {
  const [input, setInput] = useState('');

  // will trigger when user submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addMessage(input); // call addMessage method
      setInput(''); // empty the input
    }
  };

  return (
    // taking user input
    <dev class='input-container'>
      <form className="chatinput" onSubmit={handleSubmit}>
        
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your detailed query here..."
        />
        
        <button type="submit">AI</button>
      
      </form>
    </dev>
  );
};

export default ChatInput;
