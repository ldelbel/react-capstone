import React from 'react';
import PropTypes from 'prop-types';
import styles from './DetailsMain.module.scss';

const DetailsMainContent = props => {
  const { state } = props;
  return (
    <>
      <div
        className={`d-flex flex-row justify-content-between align-items-center ${styles.title}`}
      >
        <span>{state.symbol}</span>
      </div>
      <div className={styles.subtitle}><span>{state.exchange}</span></div>
      <div className={`d-flex flex-row ${styles.content}`}>
        <div className={styles.content__mkt}>
          <div className={styles.content__mkt__line}>
            <span className={styles.content__mkt__line__tag}>
              MktCap:
            </span>
            <span
              className={`d-lg-flex align-items-lg-end ${styles.content__mkt__line__value_g}`}
            >
              {`U$ ${state.marketCap.toFixed(2)}`}
            </span>
          </div>
          <div className={styles.content__mkt__line}>
            <span className={styles.content__mkt__line__tag}>
              SharesOut:
            </span>
            <span className={styles.content__mkt__line__value_b}>{state.sharesOutstanding}</span>
          </div>
          <div className="d-flex flex-row justify-content-center" style={{ borderTopStyle: 'solid', borderTopColor: 'var(--light)' }}>
            <span style={{
              fontSize: 20, fontFamily: 'Alata, sans-serif', fontWeight: 'bold', marginRight: 20, marginTop: 15, marginBottom: 15, fontStyle: 'italic', color: 'var(--light)',
            }}
            >
              Transactions
            </span>
          </div>
          <div className={styles.content__mkt__line}>
            <span className={styles.content__mkt__line__tag}>
              Volume:
            </span>
            <span className={styles.content__mkt__line__value_b}>{state.volume}</span>
          </div>
          <div className={styles.content__mkt__line}>
            <span className={styles.content__mkt__line__tag}>
              AvgVolume:
            </span>
            <span className={styles.content__mkt__line__value_b}>{state.avgVolume}</span>
          </div>
          <div className={styles.content__mkt__line}>
            <span className={styles.content__mkt__line__tag}>
              PriceAvg50:
            </span>
            <span className={styles.content__mkt__line__value_g}>{`U$ ${state.priceAvg50.toFixed(2)}`}</span>
          </div>
          <div className={styles.content__mkt__line}>
            <span className={styles.content__mkt__line__tag}>
              PriceAvg200:
            </span>
            <span className={styles.content__mkt__line__value_g}>{`U$ ${state.priceAvg200.toFixed(2)}`}</span>
          </div>
        </div>
        <div style={{
          height: '100%', width: '39%', padding: 15, paddingTop: 0, paddingLeft: 25,
        }}
        >
          <div className="d-flex flex-row justify-content-start align-items-center">
            <span style={{
              fontFamily: 'Alata, sans-serif', fontSize: 40, height: 50, margin: '-5px',
            }}
            >
              Price
            </span>
          </div>
          <div className="d-flex flex-row justify-content-start align-items-center" style={{ height: '20%' }}>
            <div className="d-flex" style={{ height: 40, borderTopStyle: 'none' }}>
              <span
                className="d-flex flex-row justify-content-center align-items-center"
                style={{
                  fontFamily: 'Aleo, serif', color: 'rgb(255,214,0)', fontSize: 38, fontWeight: 'bold', textShadow: '1px 1px 2px rgb(0,0,0)',
                }}
              >
                {`U$ ${state.price.toFixed(2)}`}
              </span>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-start align-items-center" style={{ marginTop: 20 }}>
            <span style={{
              fontFamily: 'Alata, sans-serif', fontSize: 25, height: 30, margin: '-5px',
            }}
            >
              Open
            </span>
          </div>
          <div className="d-flex flex-row justify-content-start align-items-center" style={{ height: '20%' }}>
            <div className="d-flex" style={{ height: 40, borderTopStyle: 'none' }}>
              <span
                className="d-flex flex-row justify-content-center align-items-center"
                style={{
                  fontFamily: 'Alata, sans-serif', color: 'var(--green)', fontSize: 28, fontWeight: 'bold',
                }}
              >
                {`U$ ${state.open.toFixed(2)}`}
              </span>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-start align-items-center">
            <span style={{
              fontFamily: 'Alata, sans-serif', fontSize: 25, height: 30, margin: '-5px',
            }}
            >
              Previous Closed
            </span>
          </div>
          <div className="d-flex flex-row justify-content-start align-items-center" style={{ height: '20%' }}>
            <div className="d-flex" style={{ height: 40, borderTopStyle: 'none' }}>
              <span
                className="d-flex flex-row justify-content-center align-items-center"
                style={{
                  fontFamily: 'Alata, sans-serif', color: 'var(--danger)', fontSize: 28, fontWeight: 'bold',
                }}
              >
                {`U$ ${state.previousClose.toFixed(2)}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DetailsMainContent.propTypes = {
  state: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    exchange: PropTypes.string.isRequired,
    marketCap: PropTypes.number.isRequired,
    sharesOutstanding: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    priceAvg200: PropTypes.number.isRequired,
    priceAvg50: PropTypes.number.isRequired,
    previousClose: PropTypes.number.isRequired,
    open: PropTypes.number.isRequired,
    volume: PropTypes.number.isRequired,
    avgVolume: PropTypes.number.isRequired,
  }).isRequired,
};

export default DetailsMainContent;
