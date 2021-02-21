import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../common/Navbar';
import { quote } from '../../API/api';
import DetailsMainContent from './components/DetailsMainContent';
import DetailsQuoteContent from './components/DetailsQuoteContent';
import LoadingDiv from '../common/Loading';

const Details = () => {
  const { symbol } = useParams();
  const history = useHistory();
  const [state, setState] = useState({});

  const [isFetching, setIsFetching] = useState(true);

  useEffect(async () => {
    const res = await quote(symbol);
    if (res) {
      setState(res);
      setIsFetching(false);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <button
        className="no-outline"
        type="button"
        onClick={() => history.goBack()}
        style={{
          position: 'absolute',
          backgroundColor: '#17A2B8',
          width: '5%',
          height: '7%',
          top: '150px',
          border: 'none',
          borderBottomRightRadius: '10px',
          borderTopRightRadius: '10px',
          color: 'var(--light)',
          fontFamily: 'Alfa Slab One, cursive',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '1.5%',
        }}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} size="3x" />
      </button>
      <div className="container d-flex flex-row justify-content-between" style={{ marginTop: 30, height: '75vh', width: '95%' }}>
        <div style={{
          height: '100%', width: '69%', background: 'rgba(108,117,125,0.16)', borderRadius: 20, padding: 20,
        }}
        >
          { isFetching ? <LoadingDiv color="#343A40" /> : <DetailsMainContent state={state} />}
        </div>
        <div style={{
          height: '100%', width: '30%', background: 'var(--dark)', borderRadius: 20, padding: 20, paddingTop: 10,
        }}
        >
          { isFetching ? <LoadingDiv color="var(--light)" /> : <DetailsQuoteContent state={state} />}
        </div>
      </div>
    </div>
  );
};

export default Details;
