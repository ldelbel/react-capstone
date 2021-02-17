import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

const Details = props => {
  const { symbol } = useParams();
  return (
    <div>
      { symbol }
    </div>
  )
};

Details.propTypes = {
  stock: PropTypes.string.isRequired,
};

export default Details;
