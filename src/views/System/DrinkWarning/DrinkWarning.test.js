import React from 'react';
import ReactDOM from 'react-dom';
import DrinkCount from './DrinkWarning';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DrinkWarning />, div);
  ReactDOM.unmountComponentAtNode(div);
});
