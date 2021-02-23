import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  COUNTRIES, SECTORS, EXCHANGES, PRICES,
} from '../../../../constants/index';
import styles from './Filter.module.scss';

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
    <div className={styles.filter}>
      <div className={styles.filter__title}><span>Filters&nbsp;</span></div>
      <div className={`d-flex flex-row justify-content-center align-items-center ${styles.filter__body}`}>
        <div className={styles.filter__body__div}>
          <span>
            Price Range&nbsp;
          </span>
          <select
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
        <div className={styles.filter__body__div}>
          <span>
            Sector&nbsp;
          </span>
          <select
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
        <div className={styles.filter__body__div}>
          <span>
            Country&nbsp;
          </span>
          <select
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
        <div className={styles.filter__body__div}>
          <span>
            Exchange&nbsp;
          </span>
          <select
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
          className={`btn ${styles.filter__body__btn}`}
          type="button"
          onClick={handleSubmit}
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
