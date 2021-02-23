import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import styles from './StockCard.module.scss';

const StyledDiv1 = styled.div`
  width: 31%;
  min-width: 250px;
  height: 200px;
  background: #ffffff;
  border-radius: 10px;
  margin-right: 15px;
  margin-top: 15px;
`;

const StyledDiv2 = styled.div`
height: 45%;
background: #ffffff;
padding: 0;
width: 90%;
border-bottom: 1px solid rgba(33,37,41,0.12);
`;
const StyledDiv3 = styled.div`
width: 55px;
height: 55px;
border-radius: 50%;
background-size: contain, auto;
background-position: center;
background-repeat: no-repeat;
`;

const StyledDiv4 = styled.div`
background: rgba(0,123,255,0.43);
color: var(--blue);
font-weight: bold;
padding: 0;
padding-right: 3px;
padding-left: 3px;
font-size: 12px;
`;

const StyledDiv5 = styled.div`
background: rgba(220,53,69,0.44);
color: var(--danger);
font-weight: bold;
padding-right: 3px;
padding-left: 3px;
font-size: 12px;
`;
const StyledDiv6 = styled.div`
color: #212529;
background: var(--dark);
height: 25%;
border-bottom-right-radius: 9px;
border-bottom-left-radius: 9px;
`;

const StyledBtn1 = styled.button`
color: var(--light);
background: var(--success);
font-family: 'Alfa Slab One', cursive;
border-style: none;
border-bottom-style: none;

&:hover {
  background: var(--light);
  color: var(--success);
}
`;

const StockCard = props => {
  const { profile } = props;
  const history = useHistory();
  // const [img, setImg] = useState(false);

  const handleClick = () => {
    history.push(`/details/${profile.symbol}`);
  };

  // useEffect(() => {
  //   setImg(true);
  // }, [profile]);

  return (
    <StyledDiv1>
      <div className="d-flex flex-column justify-content-start align-items-center h-75">
        <StyledDiv2 className="d-flex flex-row align-items-center">
          <div className="d-flex align-items-center w-50 h-100">
            <StyledDiv3 style={{ backgroundImage: `url(https://financialmodelingprep.com/image-stock/${profile.symbol}.jpg)` }} />
          </div>
          <div className="d-flex flex-column justify-content-start align-items-end w-50 h-100">
            <span style={{
              fontFamily: 'Alfa Slab One, cursive', fontSize: '25px', color: 'var(--dark)', height: '30px',
            }}
            >
              {profile.symbol}
            </span>
            <span style={{ color: 'var(--blue)', fontFamily: 'Alfa Slab One, cursive', fontSize: '10px' }}>{profile.exchangeShortName}</span>
          </div>
        </StyledDiv2>
        <div className={`w-100 p-0 ${styles.h55}`}>
          <div className={`d-flex align-items-end ${styles.h40pl10}`}>
            <span className={`text-nowrap text-truncate flex-nowrap ${styles.ffafs18}`}>
              {profile.companyName}
            </span>
          </div>
          <div className={`d-flex flex-column justify-content-center align-items-end ${styles.h60fs13}`}>
            <StyledDiv4><span>{profile.sector}</span></StyledDiv4>
            <StyledDiv5><span>{profile.industry}</span></StyledDiv5>
          </div>
        </div>
      </div>
      <StyledDiv6 className="d-flex flex-row justify-content-around align-items-center">
        <StyledBtn1 className="btn btn-primary" type="button" onClick={handleClick}>Details</StyledBtn1>
        <span className={styles.ffacyfs23}>{`U$ ${profile.price.toFixed(2)}`}</span>
      </StyledDiv6>
    </StyledDiv1>
  );
};

StockCard.propTypes = {
  profile: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    exchangeShortName: PropTypes.string.isRequired,
    sector: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default StockCard;
