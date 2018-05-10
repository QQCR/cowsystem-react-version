import React from 'react';
import ReactDOM from 'react-dom';
import DrinkCount from './DrinHistory';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DrinkHistory />, div);
  ReactDOM.unmountComponentAtNode(div);
});
