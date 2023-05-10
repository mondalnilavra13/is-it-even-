import React, { useState } from 'react';

function EvenOrOdd() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const checkEvenOrOdd = () => {
    const num = parseInt(number);

    if (isNaN(num)) {
      setResult('Please enter a valid number');
    } else {
      setResult(num % 2 === 0 ? 'Even' : 'Odd');
    }
  };

  return (
    <div>
      <input type="text" value={number} onChange={handleInputChange} />
      <button onClick={checkEvenOrOdd}>Check</button>
      <p>{result}</p>
    </div>
  );
}

export default EvenOrOdd;
