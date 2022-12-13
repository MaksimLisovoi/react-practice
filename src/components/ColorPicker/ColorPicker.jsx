import './ColorPicker.css';

import React, { Component } from 'react';
import './ColorPicker.css';

export class ColorPicker extends Component {
  state = {
    activeOptionIdx: 4,
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];
    const { activeOptionIdx } = this.state;

    if (activeOptionIdx === index) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  setActiveIndex = index => {
    this.setState({
      activeOptionIdx: index,
    });
  };

  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;

    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>

        <p>Выбран цвет:{label} </p>

        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => {
                  this.setActiveIndex(index);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}
