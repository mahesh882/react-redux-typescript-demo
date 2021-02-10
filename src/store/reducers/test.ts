
import {Actions,Action} from "../actions";

interface IQueryReducer {
  counter:number
}

const initialState: IQueryReducer = {
  counter: 0
};

export default function test(
  state = initialState,
  action: Action
): IQueryReducer {
  const { type, payload } = action;

  switch (type) {
    case Actions.ADD_DATA:
      return {
        ...state,
        counter: state.counter+1,
      };

      case Actions.SUB_DATA:
      return {
        ...state,
        counter: state.counter-1,
      };  
  
    default:
      return { ...state };
  }
}
