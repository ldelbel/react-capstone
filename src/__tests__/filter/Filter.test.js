import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Filter from '../../pages/home/components/filter/Filter';
import updateFilter from '../../actions/index';

describe('Filter DOM', () => {
  it('renders correctly', () => {
    const filter = renderer.create(
      <Filter handleUpdateFilter={updateFilter} />,
    ).toJSON();
    expect(filter).toMatchSnapshot();
  });

  it('has a span with Filters', () => {
    const { container } = render(<Filter handleUpdateFilter={updateFilter} />);
    expect(container.firstChild.firstChild.firstChild.nodeName).toBe('SPAN');
    expect(container.firstChild.firstChild.firstChild).toHaveTextContent('Filters');
  });

  it('has 4 select fields', () => {
    const { container } = render(<Filter handleUpdateFilter={updateFilter} />);
    expect(container.getElementsByTagName('select').length).toBe(4);
  });

  it('has Apply Button', () => {
    const { container } = render(<Filter handleUpdateFilter={updateFilter} />);
    expect(container.getElementsByTagName('button')[0]).toHaveTextContent('Apply');
  });
});
