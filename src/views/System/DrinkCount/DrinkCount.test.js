import React from 'react';
import ReactDOM from 'react-dom';
import DrinkCount from './DrinkCount';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DrinkCount />, div);
  ReactDOM.unmountComponentAtNode(div);
});
