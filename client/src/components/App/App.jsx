import './App.css';
import { useDispatch } from 'react-redux';
import CounterList from '../Counter/CounterList';
import { addCounter } from '../../redux/actionCreators/countertAC';

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className='addCounter'
        onClick={() => dispatch(addCounter())}>
        Добавить
      </button>
      <CounterList />
    </>
  );
}

export default App;
