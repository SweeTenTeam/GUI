import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import ChatWindow from './components/ChatWindow';


const App: React.FC = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Header />
      <Navbar />
      <ChatWindow />
    </>
  )
}

export default App; 
