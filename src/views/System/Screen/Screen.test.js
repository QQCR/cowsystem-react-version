import React from 'react';
import ReactDOM from 'react-dom';
import DrinkCount from './Screen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Screen />, div);
  ReactDOM.unmountComponentAtNode(div);
});
