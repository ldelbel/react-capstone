import React from 'react';
import PropTypes from 'prop-types';

const CompanyCard = props => {
  const { profile } = props;

  return (
    <div key={profile.symbol}>
      <img src={`https://financialmodelingprep.com/image-stock/${profile.symbol}.jpg`} alt="logo" />
      <p>
        Company:
        {profile.companyName}
      </p>
    </div>
  );
};

CompanyCard.propTypes = {
  profile: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
  }).isRequired,
};

export default CompanyCard;
