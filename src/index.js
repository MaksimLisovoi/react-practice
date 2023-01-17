import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { App } from 'components/App/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/theme';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
// );

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
