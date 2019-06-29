import {
  ERROR,
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  CREATE_SMURF_START,
  CREATE_SMURF_SUCCESS,
} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
};

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
    case CREATE_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
        error: '',
      };
    case CREATE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, payload[state.smurfs.length]],
        addingSmurf: false,
        error: '',
      };
    default:
      return state;
  }
};
