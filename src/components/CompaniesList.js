import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CompanyCard from './CompanyCard';

const CompaniesList = props => {
  console.log(props);
  const { list } = props;
  return (
    <div>
      {list.map(stock => (
        <div key={stock.symbol}>
          <CompanyCard profile={stock} />
        </div>
      ))}
    </div>
  );
};

CompaniesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(state => state)(CompaniesList);
