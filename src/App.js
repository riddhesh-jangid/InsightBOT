import React from 'react';
import Sidebar from './components/Sidebar';
import ChatBox from './components/ChatBox';
import Header from './components/Header';

function App() {
  return (
    <div className="outer-app">
      <div className="header-container">
        <Header  />
      </div>
      <div className='app'>
        <Sidebar />
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
