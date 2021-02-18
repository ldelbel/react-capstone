import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import StockCard from '../../components/StockCard';

describe('StockCard component integrity', () => { 
  it('renders correctly', () => {
    const navbar = renderer.create(
      <BrowserRouter>
        <StockCard />
      </BrowserRouter>,
    ).toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
