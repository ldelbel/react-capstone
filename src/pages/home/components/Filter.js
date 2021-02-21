import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  COUNTRIES, SECTORS, EXCHANGES, PRICES,
} from '../../../constants/index';

const Filter = props => {
  const [filter, setFilter] = useState({
    price: null,
    sector: null,
    country: null,
    exchange: null,
  });

  const handleChange = target => {
    const { value } = target.options[target.selectedIndex];
    switch (target.name) {
      case 'price':
        setFilter({ ...filter, price: value === 'null' ? null : value });
        return filter;
      case 'sector':
        setFilter({ ...filter, sector: value === 'null' ? null : value });
        return filter;
      case 'country':
        setFilter({ ...filter, country: value === 'null' ? null : value });
        return filter;
      case 'exchange':
        setFilter({ ...filter, exchange: value === 'null' ? null : value });
        return filter;
      default:
        return filter;
    }
  };

  const handleSubmit = () => {
    props.handleUpdateFilter(filter);
  };

  return (
    <div style={{
      height: 120, background: '#343a40', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 15, paddingRight: 30, paddingLeft: 30,
    }}
    >
      <div><span style={{ fontFamily: '"Alfa Slab One", cursive', color: 'var(--white)', fontSize: 30 }}>Filters&nbsp;</span></div>
      <div className="d-flex flex-row justify-content-center align-items-center" style={{ height: 50 }}>
        <div style={{ marginRight: 20 }}>
          <span style={{
            fontFamily: 'Alata, sans-serif', color: 'var(--light)', fontSize: 20, marginRight: 10,
          }}
          >
            Price Range&nbsp;
          </span>
          <select
            style={{ borderRadius: 8 }}
            defaultValue="null"
            onChange={e => handleChange(e.target)}
            name="price"
          >
            <option key="uniq" value="null">
              Select
            </option>
            {PRICES.map(price => (
              <option
                key={price}
                value={price}
              >
                {`< ${price}`}
              </option>
            ))}

          </select>
        </div>
        <div style={{ marginRight: 20 }}>
          <span style={{
            fontFamily: 'Alata, sans-serif', color: 'var(--light)', fontSize: 20, marginRight: 10,
          }}
          >
            Sector&nbsp;
          </span>
          <select
            style={{ borderRadius: 8 }}
            onChange={e => handleChange(e.target)}
            name="sector"
            defaultValue="null"
          >
            <option key="uniq" value="null">
              Select
            </option>
            {SECTORS.map(sector => (
              <option key={sector} value={sector}>{sector}</option>
            ))}
          </select>
        </div>
        <div style={{ marginRight: 20 }}>
          <span style={{
            fontFamily: 'Alata, sans-serif', color: 'var(--light)', fontSize: 20, marginRight: 10,
          }}
          >
            Country&nbsp;
          </span>
          <select
            style={{ borderRadius: 8 }}
            onChange={e => handleChange(e.target)}
            name="country"
            defaultValue="null"
          >
            <option key="uniq" value="null">
              Select
            </option>
            {COUNTRIES.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div style={{ marginRight: 20 }}>
          <span style={{
            fontFamily: 'Alata, sans-serif', color: 'var(--light)', fontSize: 20, marginRight: 10,
          }}
          >
            Exchange&nbsp;
          </span>
          <select
            style={{ borderRadius: 8 }}
            onChange={e => handleChange(e.target)}
            name="exchange"
            defaultValue="null"
          >
            <option key="uniq" value="null">
              Select
            </option>
            {EXCHANGES.map(exchange => (
              <option key={exchange} value={exchange}>{exchange}</option>
            ))}
          </select>
        </div>
        <button
          className="btn"
          type="button"
          onClick={handleSubmit}
          style={{
            fontFamily: 'Alata, sans-serif', fontSize: 20, color: 'var(--white)', background: 'var(--yellow)', borderStyle: 'none', paddingTop: 3, paddingBottom: 6, fontWeight: 'bold', borderRadius: 15,
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

Filter.propTypes = {
  handleUpdateFilter: PropTypes.func.isRequired,
};

export default Filter;
