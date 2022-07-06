import React from 'react';
import { useSelector } from 'react-redux';
import Counter from './Counter';

function CounterList() {
  const { counters } = useSelector(state => state.counters);

  return (
    <div>
      {counters.map((el, i) => <Counter 
      key={el.id} 
      i={i + 1} 
      el={el} />)}
    </div>

  );
};

export default CounterList;
