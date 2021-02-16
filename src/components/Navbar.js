import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-light navbar-expand-md" style={{ background: 'var(--cyan)' }}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/" style={{ fontFamily: 'Alfa Slab One, cursive', color: 'var(--white)', fontSize: '35px' }}>Stonk$</a>
      <button type="button" data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navcol-1">
        <ul className="nav navbar-nav">
          <li className="nav-item"><a className="nav-link active" href="/">First Item</a></li>
          <li className="nav-item"><a className="nav-link" href="/">Second Item</a></li>
          <li className="nav-item"><a className="nav-link" href="/">Third Item</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
