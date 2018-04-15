import React from 'react';
import { render } from 'react-dom';
import document from 'global/document';

const root = document.createElement('div');
document.body.appendChild(root);

render(<h1>Hello!</h1>, root);
