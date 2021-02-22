import React from 'react';
import Loading from 'react-loading-components';
import PropTypes from 'prop-types';

const LoadingDiv = props => {
  const { color } = props;
  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <Loading type="spinning_circles" fill={color} width="30%" />
    </div>
  );
};

LoadingDiv.propTypes = {
  color: PropTypes.string,
};

LoadingDiv.defaultProps = {
  color: '#fff',
};

export default LoadingDiv;
