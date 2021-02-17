import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Navbar from '../components/Navbar';
import { quote } from '../API/api';

const Details = () => {
  const { symbol } = useParams();
  const [state, setState] = useState({ o: {} });

  useEffect(async () => {
    const res = await quote(symbol);
    setState(res);
  });

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-row justify-content-between" style={{ marginTop: 30, height: '75vh', width: '95%' }}>
        <div style={{
          height: '100%', width: '69%', background: 'rgba(108,117,125,0.16)', borderRadius: 20, padding: 20,
        }}
        >
          <div
            className="d-flex flex-row justify-content-between align-items-center"
            style={{
              height: '15%', width: '100%', fontSize: 40, fontFamily: '"Alfa Slab One", cursive', borderStyle: 'none', borderBottomStyle: 'solid',
            }}
          >
            <span style={{ fontSize: 50, height: 60 }}>{state.symbol}</span>
          </div>
          <div style={{ height: '5%', marginBottom: 20 }}><span style={{ color: 'var(--blue)', fontFamily: '"Alfa Slab One", cursive' }}>{state.exchange}</span></div>
          <div className="d-flex flex-row" style={{ height: '80%' }}>
            <div style={{
              background: 'var(--dark)', width: '61%', height: '90%', borderRadius: 20, padding: 15,
            }}
            >
              <div className="d-flex flex-row justify-content-between">
                <span style={{
                  fontSize: 20, fontFamily: 'Alata, sans-serif', fontWeight: 'bold', marginRight: 0, color: 'var(--light)',
                }}
                >
                  MktCap:
                </span>
                <span
                  className="d-lg-flex align-items-lg-end"
                  style={{
                    fontSize: 18, fontFamily: 'Alata, sans-serif', color: 'var(--success)', borderTopColor: 'var(--green)',
                  }}
                >
                  {`U$ ${state.marketCap.toFixed(2)}`}
                </span>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <span style={{
                  fontSize: 20, fontFamily: 'Alata, sans-serif', fontWeight: 'bold', marginRight: 20, color: 'var(--light)',
                }}
                >
                  SharesOut:
                </span>
                <span style={{ fontSize: 18, fontFamily: 'Alata, sans-serif', color: 'var(--blue)' }}>{state.sharesOutstanding}</span>
              </div>
              <div className="d-flex flex-row justify-content-center" style={{ borderTopStyle: 'solid', borderTopColor: 'var(--light)' }}>
                <span style={{
                  fontSize: 20, fontFamily: 'Alata, sans-serif', fontWeight: 'bold', marginRight: 20, marginTop: 15, marginBottom: 15, fontStyle: 'italic', color: 'var(--light)',
                }}
                >
                  Transactions
                </span>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <span style={{
                  fontSize: 20, fontFamily: 'Alata, sans-serif', fontWeight: 'bold', marginRight: 20, color: 'var(--light)',
                }}
                >
                  Volume:
                </span>
                <span style={{ fontSize: 18, fontFamily: 'Alata, sans-serif', color: 'var(--blue)' }}>{state.volume}</span>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <span style={{
                  fontSize: 20, fontFamily: 'Alata, sans-serif', fontWeight: 'bold', marginRight: 20, color: 'var(--light)',
                }}
                >
                  AvgVolume:
                </span>
                <span style={{ fontSize: 18, fontFamily: 'Alata, sans-serif', color: 'var(--blue)' }}>{state.avgVolume}</span>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <span style={{
                  fontSize: 20, fontFamily: 'Alata, sans-serif', fontWeight: 'bold', marginRight: 20, color: 'var(--light)',
                }}
                >
                  PriceAvg50:
                </span>
                <span style={{ fontSize: 18, fontFamily: 'Alata, sans-serif', color: 'var(--success)' }}>{`U$ ${state.priceAvg50.toFixed(2)}`}</span>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <span style={{
                  fontSize: 20, fontFamily: 'Alata, sans-serif', fontWeight: 'bold', marginRight: 20, color: 'var(--light)',
                }}
                >
                  PriceAvg200:
                </span>
                <span style={{ fontSize: 18, fontFamily: 'Alata, sans-serif', color: 'var(--success)' }}>{`U$ ${state.priceAvg200.toFixed(2)}`}</span>
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
        </div>
        <div style={{
          height: '100%', width: '30%', background: 'var(--dark)', borderRadius: 20, padding: 20, paddingTop: 10,
        }}
        >
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
        </div>
      </div>
    </>
  );
};

export default Details;
