import React from 'react';
import { render } from 'react-dom';
import document from 'global/document';
import { css } from 'glamor';
import App from './app';

css.global('html, body', {
  width: '100vw',
  height: '100vh',
  background: '#2e2a24',
  color: '#f9d094',
  display: 'flex',
  justifyContent: 'center',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif',
});

const root = document.createElement('div');
document.body.appendChild(root);

render(<App />, root);
