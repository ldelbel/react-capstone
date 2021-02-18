import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import StockList from '../../components/StockList';

it('renders correctly', () => {
  const navbar = renderer.create(
    <BrowserRouter>
      <StockList />
    </BrowserRouter>,
  ).toJSON();
  expect(navbar).toMatchSnapshot();
});