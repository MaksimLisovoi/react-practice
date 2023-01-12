// import React, { Component } from 'react';
import { useState, useEffect, useRef } from 'react';
import { Controls } from './Controls';
import PropTypes from 'prop-types';

import './Counter.css';

export function Counter({ initialValue }) {
  const [value, setValue] = useState(initialValue);

  /////Игнор первого рендера///

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log('Выполняется useEffect');
  });

  ////////

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
