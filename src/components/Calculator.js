import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
        text: '6',
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
    return (
      <>
        <section className="container">
          <div className="result">0</div>
          <section className="grid-container">
            {items.map((item, index) => (
              <div key={item.id} className={`grid-item item${index + 1}`}>
                {item.symbol}
              </div>
            ))}
          </section>
        </section>
      </>
    );
  }
}

export default Calculator;
