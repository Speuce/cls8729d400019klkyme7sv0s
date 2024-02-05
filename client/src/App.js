import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios.get('/getCounter')
      .then(res => {
        setCounter(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const incrementCounter = () => {
    axios.post('/incrementCounter')
      .then(res => {
        setCounter(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Counter: {counter}</p>
        <button onClick={incrementCounter}>Increment Counter</button>
      </header>
    </div>
  );
}

export default App;