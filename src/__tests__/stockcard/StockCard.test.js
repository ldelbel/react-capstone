import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StockCard from '../../pages/home/components/stockcard/StockCard';
import profileTest from '../../constants/testHelper';

describe('StockCard DOM', () => {
  it('renders correctly', () => {
    const stockCard = renderer.create(
      <StockCard profile={profileTest} />,
    ).toJSON();
    expect(stockCard).toMatchSnapshot();
  });

  it('Has details button', () => {
    const { container } = render(<StockCard profile={profileTest} />);
    expect(container.getElementsByTagName('button')[0]).toHaveTextContent('Details');
  });
});
