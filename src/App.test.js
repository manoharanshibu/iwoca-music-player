import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Player from './components/Player'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Check song list contains all items', () => {
  let player = new Player();
  expect(player.getSongs().length).toBe(4)
});