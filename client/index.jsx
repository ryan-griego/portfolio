import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
// import '../server/public/styles.css';
import ThemeContextWrapper from './theme/ThemeWrapper';

ReactDOM.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>{' '}
  </ThemeContextWrapper>,
  document.querySelector('.main')
);
