import React, { Component } from 'react';
import './Counter.css';

export class Counter extends Component {
  handleIncrement = () => {
    console.log('increase');
    console.log(this);
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">0</span>

        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('decrease');
            }}
          >
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}
