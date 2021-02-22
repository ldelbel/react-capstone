import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StockCard from '../stockcard/StockCard';
import Filter from '../filter/Filter';
import LoadingDiv from '../../../../common/components/Loading';
import updateFilter from '../../../../actions/index';
import mapStockstoProps from '../../../../utils/index';
import styles from './StockList.module.scss';

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
        className={`d-flex flex-row justify-content-start flex-wrap ${styles.stocklist}`}
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
