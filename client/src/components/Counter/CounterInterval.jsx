import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { delCounter, plusScore } from '../../redux/actionCreators/countertAC';

function CounterInterval({ el }) {

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(plusScore(el.id))
    }, 1000);

    return () => {
      clearInterval(interval);
    };

  }, []);

  return (
    <div className='centr'>
      <div className='app'>
        <h1>{el.score}</h1>
        <button
          className='delCounter'
          onClick={() => dispatch(delCounter(el.id))}>
          X
        </button>
      </div>
    </div>
  );
};

export default CounterInterval;
