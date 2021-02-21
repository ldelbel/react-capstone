import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StockCard from './StockCard';
import Filter from './Filter';
import LoadingDiv from '../../common/Loading';
import updateFilter from '../../../actions/index';
import mapStockstoProps from '../../../utils/index';

const StyledContainer = styled.div`
border-radius: 20px;
padding: 0;
margin-top: 35px;
box-shadow: 2px 2px 8px 2px rgba(33,37,41,0.62);
`;

const StockList = props => {
  const { list } = props;
  const handleUpdateFilter = target => {
    props.updateFilter(target);
  };
  return (
    <StyledContainer className="container">
      <Filter handleUpdateFilter={handleUpdateFilter} />
      <div
        className="d-flex flex-row justify-content-start flex-wrap"
        style={{
          background: '#17A2B8', minHeight: '90px', marginTop: '0', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', paddingRight: '0', paddingTop: '10px', paddingBottom: '15px', paddingLeft: '45px',
        }}
      >
        {list
          ? (
            list.map(stock => (
              <StockCard key={stock.symbol} profile={stock} />
            ))
          )
          : <LoadingDiv />}
      </div>
    </StyledContainer>
  );
};

StockList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
    }),
  ).isRequired,
  updateFilter: PropTypes.func.isRequired,
};

export default connect(mapStockstoProps, { updateFilter })(StockList);
