import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../../components/Navbar';

it('renders correctly', () => {
  const navbar = renderer.create(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  ).toJSON();
  expect(navbar).toMatchSnapshot();
});