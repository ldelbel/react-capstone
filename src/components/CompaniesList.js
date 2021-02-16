import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CompanyCard from './CompanyCard';
import Filter from './Filter';

const StyledContainer = styled.div`
border-radius: 20px;
padding: 0;
margin-top: 35px;
box-shadow: 2px 2px 8px 2px rgba(33,37,41,0.62);
`;

const CompaniesList = props => {
  const { list } = props;
  return (
    <StyledContainer className="container">
      <Filter />
      <div
        className="d-flex flex-row justify-content-start flex-wrap"
        style={{
          background: '#17A2B8', minHeight: '90px', marginTop: '0', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', paddingRight: '0', paddingTop: '0', paddingBottom: '15px', paddingLeft: '45px',
        }}
      >
        {list.slice(0, 10).map(stock => (
          <CompanyCard key={stock.symbol} profile={stock} />
        ))}
      </div>
    </StyledContainer>
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
