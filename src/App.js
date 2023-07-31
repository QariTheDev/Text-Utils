import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Form from './components/Form';

let name = "Qari Sahab❤️"

function App() {
  const [mode, setMode] = React.useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#073860';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title='Text Utility' mode={mode} toggleMode={toggleMode}/>
      <Form mode={mode} toggleMode={toggleMode}/>
      <Footer title={name}/>
    </>
  );
}

export default App;