import React from 'react';
import PropTypes from 'prop-types';

const DetailsQuoteContent = props => {
  const { state } = props;
  return (
    <>
      <div className="d-flex justify-content-center" style={{ marginBottom: 15 }}>
        <span style={{
          fontSize: 36, fontFamily: 'Alata, sans-serif', color: 'var(--light)', fontWeight: 'bold', fontStyle: 'italic',
        }}
        >
          Quote
        </span>
      </div>
      <div className="d-flex flex-column align-items-end">
        <div style={{
          borderBottomStyle: 'solid', borderBottomColor: 'var(--light)', height: 30, width: '100%',
        }}
        >
          <span style={{ color: 'var(--light)', fontSize: 20, fontFamily: 'Alata, sans-serif' }}>Change (%)</span>
        </div>
        <span style={{
          color: 'var(--yellow)', fontSize: 28, fontFamily: 'Alata, sans-serif', fontWeight: 'bold', margin: '-5px',
        }}
        >
          {state.changesPercentage}
        </span>
      </div>
      <div className="d-flex flex-column align-items-end">
        <div style={{
          borderBottomStyle: 'solid', borderBottomColor: 'var(--light)', height: 30, width: '100%',
        }}
        >
          <span style={{ color: 'var(--light)', fontSize: 20, fontFamily: 'Alata, sans-serif' }}>Day High (U$)</span>
        </div>
        <span style={{
          color: 'var(--green)', fontSize: 28, fontFamily: 'Alata, sans-serif', fontWeight: 'bold', margin: '-5px',
        }}
        >
          {state.dayHigh.toFixed(2)}
        </span>
      </div>
      <div className="d-flex flex-column align-items-end">
        <div style={{
          borderBottomStyle: 'solid', borderBottomColor: 'var(--light)', height: 30, width: '100%',
        }}
        >
          <span style={{ color: 'var(--light)', fontSize: 20, fontFamily: 'Alata, sans-serif' }}>Day Low (U$)</span>
        </div>
        <span style={{
          color: 'var(--red)', fontSize: 28, fontFamily: 'Alata, sans-serif', fontWeight: 'bold', margin: '-5px',
        }}
        >
          {state.dayLow.toFixed(2)}
        </span>
      </div>
      <div className="d-flex flex-column align-items-end">
        <div style={{
          borderBottomStyle: 'solid', borderBottomColor: 'var(--light)', height: 30, width: '100%',
        }}
        >
          <span style={{ color: 'var(--light)', fontSize: 20, fontFamily: 'Alata, sans-serif' }}>Year High  (U$)</span>
        </div>
        <span style={{
          color: 'var(--green)', fontSize: 28, fontFamily: 'Alata, sans-serif', fontWeight: 'bold', margin: '-5px',
        }}
        >
          <strong>{state.yearHigh.toFixed(2)}</strong>
        </span>
      </div>
      <div className="d-flex flex-column align-items-end">
        <div style={{
          borderBottomStyle: 'solid', borderBottomColor: 'var(--light)', height: 30, width: '100%',
        }}
        >
          <span style={{ color: 'var(--light)', fontSize: 20, fontFamily: 'Alata, sans-serif' }}>Year Low (U$)</span>
        </div>
        <span style={{
          color: 'var(--red)', fontSize: 28, fontFamily: 'Alata, sans-serif', fontWeight: 'bold', margin: '-5px',
        }}
        >
          <strong>{state.yearLow.toFixed(2)}</strong>
        </span>
      </div>
    </>
  );
};

DetailsQuoteContent.propTypes = {
  state: PropTypes.shape({
    changesPercentage: PropTypes.number.isRequired,
    dayHigh: PropTypes.number.isRequired,
    dayLow: PropTypes.number.isRequired,
    yearLow: PropTypes.number.isRequired,
    yearHigh: PropTypes.number.isRequired,
  }).isRequired,
};

export default DetailsQuoteContent;
