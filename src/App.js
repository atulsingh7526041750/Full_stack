
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1>Hello from the Frontend!</h1>
      <p>Message from the Backend: {message}</p>
    </div>
  );
}

export default App;
