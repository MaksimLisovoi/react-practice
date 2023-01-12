// import React, { Component } from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import './ColorPicker.css';

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

// export class ColorPicker extends Component {
//   state = {
//     activeOptionIdx: 4,
//   };

//   makeOptionClassName = index => {
//     const { activeOptionIdx } = this.state;

//     return classNames('ColorPicker__option', {
//       'ColorPicker__option--active': index === activeOptionIdx,
//     });

//     // const optionClasses = ['ColorPicker__option'];

//     // if (activeOptionIdx === index) {
//     //   optionClasses.push('ColorPicker__option--active');
//     // }

//     // return optionClasses.join(' ');
//   };

//   setActiveIndex = index => {
//     this.setState({
//       activeOptionIdx: index,
//     });
//   };

//   render() {
//     const { options } = this.props;
//     const { activeOptionIdx } = this.state;

//     const { label } = options[activeOptionIdx];

//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>

//         <p>Выбран цвет:{label} </p>

//         <div>
//           {options.map(({ label, color }, index) => {
//             return (
//               <button
//                 key={label}
//                 className={this.makeOptionClassName(index)}
//                 style={{
//                   backgroundColor: color,
//                 }}
//                 onClick={() => {
//                   this.setActiveIndex(index);
//                 }}
//               ></button>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
