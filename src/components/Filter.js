import React from 'react';

const Filter = () => (
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
        <select style={{ borderRadius: 8 }}>
          <optgroup label="This is a group">
            <option value={12} selected>This is item 1</option>
            <option value={13}>This is item 2</option>
            <option value={14}>This is item 3</option>
          </optgroup>
        </select>
      </div>
      <div style={{ marginRight: 20 }}>
        <span style={{
          fontFamily: 'Alata, sans-serif', color: 'var(--light)', fontSize: 20, marginRight: 10,
        }}
        >
          Sector&nbsp;
        </span>
        <select style={{ borderRadius: 8 }}>
          <optgroup label="This is a group">
            <option value={12} selected>This is item 1</option>
            <option value={13}>This is item 2</option>
            <option value={14}>This is item 3</option>
          </optgroup>
        </select>
      </div>
      <div style={{ marginRight: 20 }}>
        <span style={{
          fontFamily: 'Alata, sans-serif', color: 'var(--light)', fontSize: 20, marginRight: 10,
        }}
        >
          Country&nbsp;
        </span>
        <select style={{ borderRadius: 8 }}>
          <optgroup label="This is a group">
            <option value={12} selected>This is item 1</option>
            <option value={13}>This is item 2</option>
            <option value={14}>This is item 3</option>
          </optgroup>
        </select>
      </div>
      <div style={{ marginRight: 20 }}>
        <span style={{
          fontFamily: 'Alata, sans-serif', color: 'var(--light)', fontSize: 20, marginRight: 10,
        }}
        >
          Exchange&nbsp;
        </span>
        <select style={{ borderRadius: 8 }}>
          <optgroup label="This is a group">
            <option value={12} selected>This is item 1</option>
            <option value={13}>This is item 2</option>
            <option value={14}>This is item 3</option>
          </optgroup>
        </select>
      </div>
      <button
        className="btn btn-primary"
        type="button"
        style={{
          fontFamily: 'Alata, sans-serif', fontSize: 20, color: 'var(--white)', background: 'var(--yellow)', borderStyle: 'none', paddingTop: 3, paddingBottom: 6, fontWeight: 'bold', borderRadius: 15,
        }}
      >
        Apply
      </button>
    </div>
  </div>
);

export default Filter;
