import React from 'react';
import PropTypes from 'prop-types';

const CompanyCard = props => {
  const { image, companyName } = props;

  return (
    <div>
      <img src={image} alt="logo" />
      <p>
        Company:
        {companyName}
      </p>
    </div>
  );
};

CompanyCard.propTypes = {
  image: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
};

export default CompanyCard;
