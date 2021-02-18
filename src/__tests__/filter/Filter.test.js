import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Filter from '../../components/Filter';

it('renders correctly', () => {
  const navbar = renderer.create(
    <BrowserRouter>
      <Filter />
    </BrowserRouter>,
  ).toJSON();
  expect(navbar).toMatchSnapshot();
});