import axios from 'axios';

export const ERROR = 'ERROR';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';

export const CREATE_SMURF_START = 'CREATE_SMURF_START';
export const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS';

export const UPDATE_SMURF_START = 'UPDATE_SMURF_START';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

const API_URL = 'http://localhost:3333/smurfs';
const GET = 'get';
const POST = 'post';
const PUT = 'put';

const tryApiDispatch = async (
  type,
  success,
  apiPayload = null,
  url = API_URL
) => {
  try {
    const { data } = await axios[type](url, apiPayload);
    return { type: success, payload: data };
  } catch ({ message }) {
    return { type: ERROR, payload: message };
  }
};

const callApi = {
  get: success => tryApiDispatch(GET, success),
  post: (success, payload) => tryApiDispatch(POST, success, payload),
  put: (success, payload, id) =>
    tryApiDispatch(PUT, success, payload, `${API_URL}/${id}`),
};

export const getSmurfs = () => async dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  dispatch(await callApi.get(FETCH_SMURFS_SUCCESS));
};

export const addSmurf = smurf => async dispatch => {
  dispatch({ type: CREATE_SMURF_START });
  dispatch(await callApi.post(CREATE_SMURF_SUCCESS, smurf));
};

export const updateSmurf = (smurf, id) => async dispatch => {
  dispatch({ type: UPDATE_SMURF_START });
  dispatch(await callApi.put(UPDATE_SMURF_SUCCESS, smurf, id));
};
