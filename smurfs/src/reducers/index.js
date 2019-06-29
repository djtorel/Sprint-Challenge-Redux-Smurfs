/*
  Be sure to import in all of the action types from `../actions`
*/
import { ERROR, FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ERROR:
      return {
        ...state,
        error: payload,
      };
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: '',
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: payload,
        fetchingSmurfs: false,
        error: '',
      };
    default:
      return state;
  }
};
