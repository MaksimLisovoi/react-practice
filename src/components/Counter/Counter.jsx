// import React, { Component } from 'react';
import { useState } from 'react';
import { Controls } from './Controls';
import PropTypes from 'prop-types';

import './Counter.css';

export function Counter({ initialValue }) {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    setValue(prevState => prevState + 1);
  };

  const handleDecrement = () => {
    setValue(prevState => prevState - 1);
  };

  return (
    <div className="Counter">
      <span className="Counter__value">{value}</span>

      <Controls onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
}

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
};
