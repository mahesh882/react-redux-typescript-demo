

import {Actions,Action} from "../actions/index"

export const addData = () => async (
  dispatch: (action: Action) => void
) => {
  try {
    
    dispatch({
      type:Actions.ADD_DATA,

    });

  } catch (err) {
 
    console.log(err);
  }
};


export const subData = () => async (
  dispatch: (action: Action) => void
) => {
  try {
    
    dispatch({
      type:Actions.SUB_DATA,

    });

  } catch (err) {
 
    console.log(err);
  }
};
