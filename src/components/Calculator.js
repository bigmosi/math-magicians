import React, { useState } from 'react';
import calculate from '../logic/calculator';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [obj, setObj] = useState({ next: null, total: null });
  const handleClick = (e) => {
    setObj((obj) => calculate(obj, e.target.innerText));
  };

  const items = [
    {
      id: 1,
      symbol: 'AC',
    },
    {
      id: 2,
      symbol: '+/-',
    },
    {
      id: 3,
      symbol: '%',
    },
    {
      id: 4,
      symbol: '÷',
    },
    {
      id: 5,
      symbol: '7',
    },
    {
      id: 6,
      symbol: '8',
    },
    {
      id: 7,
      symbol: '9',
    },
    {
      id: 8,
      symbol: 'x',
    },
    {
      id: 9,
      symbol: '4',
    },
    {
      id: 10,
      symbol: '5',
    },
    {
      id: 11,
      symbol: '6',
    },
    {
      id: 12,
      symbol: '-',
    },
    {
      id: 13,
      symbol: '1',
    },
    {
      id: 14,
      symbol: '2',
    },
    {
      id: 15,
      symbol: '3',
    },
    {
      id: 16,
      symbol: '+',
    },
    {
      id: 17,
      symbol: '0',
    },
    {
      id: 18,
      symbol: '.',
    },
    {
      id: 19,
      symbol: '=',
    },
  ];

  const { total, next } = obj;
  return (
    <div className="whole-container">
      <h6>Let&apos;s do some math!</h6>
      <section className="container">
        <div className="result">{next || total || 0}</div>
        <section className="grid-container">
          {items.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={`grid-item item${index + 1}`}
              onClick={handleClick}
            >
              {item.symbol}
            </button>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Calculator;
