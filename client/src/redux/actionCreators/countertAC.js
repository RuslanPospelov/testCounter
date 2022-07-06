import { 
  ADD_COUNTER,  
  DEL_COUNTER, 
  MINUS_SCORE, 
  PLUS_SCORE 
} from '../actionType/countertAT';

export const addCounter = () => {
  return {
    type: ADD_COUNTER,
  };
};

export const plusScore = (payload) => {
  return {
    type: PLUS_SCORE,
    payload,
  };
};

export const minusScore = (payload) => {
  return {
    type: MINUS_SCORE,
    payload,
  };
};

export const delCounter = (payload) => {
  return {
    type: DEL_COUNTER,
    payload,
  };
};

