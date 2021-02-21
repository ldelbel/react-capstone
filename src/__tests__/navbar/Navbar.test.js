import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../../pages/common/Navbar';

describe('Navbar DOM', () => {
  it('renders correctly', () => {
    const navbar = renderer.create(
      <Navbar />,
    ).toJSON();
    expect(navbar).toMatchSnapshot();
  });

  it('has brand name as first element', () => {
    const { container } = render(<Navbar />);
    expect(container.firstChild.firstChild).toHaveTextContent('StockList');
  });
});
