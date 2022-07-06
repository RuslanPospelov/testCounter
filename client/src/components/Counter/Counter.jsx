import React from 'react';
import { useDispatch } from 'react-redux';
import { delCounter, minusScore, plusScore } from '../../redux/actionCreators/countertAC';
import CounterInterval from './CounterInterval';

function Counter({ i, el }) {
  const dispatch = useDispatch();

  return (
    <>
      {i % 4 === 0 ? <CounterInterval el={el} /> :
        <div className='centr'>
          <div className='app'>
            <h1>{el.score}</h1>
            <button className='plus'
              onClick={() => dispatch(plusScore(el.id))}>
              Прибавить
            </button>
            <button className='minus'
              onClick={() => dispatch(minusScore(el.id))}
              disabled={el.score === 0}>
              Отнять
            </button>
            <button className='delCounter'
              onClick={() => dispatch(delCounter(el.id))}>
              X
            </button>
          </div>
        </div>
      }
    </>
  );
}

export default Counter;
