import { UPDATE_FILTER_VALUES } from '../constants/index';

const updateFilter = filter => ({
  type: UPDATE_FILTER_VALUES,
  payload: filter,
});

export default updateFilter;
