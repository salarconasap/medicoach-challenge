import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import StatusImg from './StatusImg';

test('renders content', () => {
  const component = render(<StatusImg />)
  console.log(component)
});
