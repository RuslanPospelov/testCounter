import { v4 as uuidv4 } from 'uuid';
import { 
  ADD_COUNTER, 
  DEL_COUNTER, 
  MINUS_SCORE, 
  PLUS_SCORE 
} from '../actionType/countertAT';

const initialState = { counters: [] };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      let sumCounter = 0;
      state.counters.map((el) => sumCounter += el.score);
      const newCounter = { 
        id: uuidv4(), 
        score: sumCounter 
      };
      return {
        ...state, 
        counters: [...state.counters, newCounter] 
      };

    case PLUS_SCORE:
      return {
        ...state, 
        counters : state.counters.map((el) => el.id === action.payload ? {
        ...el, 
        score: el.score + 1} : el)
    };
    case MINUS_SCORE:
      return {
        ...state, 
        counters : state.counters.map((el) => el.id === action.payload ? {
        ...el, 
        score: el.score - 1} : el)
    };
    case DEL_COUNTER:
      return {
        ...state, 
        counters: 
        state.counters.filter((el) => el.id !== action.payload)
      };
    default:
      return state
  };
};
