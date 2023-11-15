import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import ThemeContextWrapper from './theme/ThemeWrapper';

ReactDOM.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>{' '}
  </ThemeContextWrapper>,
  document.querySelector('.main')
);
