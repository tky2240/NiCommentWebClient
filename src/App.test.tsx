import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const socket = new WebSocket('ws://localhost:8080/ws');
test('renders learn react link', () => {
  render(<App WebSocket={socket} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
