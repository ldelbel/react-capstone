import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../common/components/Navbar';
import { quote } from '../../API/api';
import DetailsMainContent from './components/detailsmaincontent/DetailsMainContent';
import DetailsQuoteContent from './components/detailsquotecontent/DetailsQuoteContent';
import LoadingDiv from '../../common/components/Loading';
import styles from './Details.module.scss';

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
        className={styles.backBtn}
        type="button"
        onClick={() => history.goBack()}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} size="3x" />
      </button>
      <div className={`container d-flex flex-row justify-content-between ${styles.details}`}>
        <div className={styles.details__main}>
          { isFetching ? <LoadingDiv color="#343A40" /> : <DetailsMainContent state={state} />}
        </div>
        <div className={styles.details__quote}>
          { isFetching ? <LoadingDiv color="var(--light)" /> : <DetailsQuoteContent state={state} />}
        </div>
      </div>
    </div>
  );
};

export default Details;
