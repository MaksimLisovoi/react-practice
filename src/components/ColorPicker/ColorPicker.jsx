// import React, { Component } from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import './ColorPicker.css';
import PropTypes from 'prop-types';

export function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(4);

  const makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === activeOptionIdx,
    });
  };

  const { label } = options[activeOptionIdx];

  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>

      <p>Выбран цвет: {label} </p>

      <div>
        {options.map(({ label, color }, index) => {
          return (
            <button
              key={label}
              className={makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => {
                setActiveOptionIdx(index);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

ColorPicker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
