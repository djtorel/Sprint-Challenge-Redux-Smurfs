import axios from 'axios';

export const ERROR = 'ERROR';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';

export const CREATE_SMURF_START = 'CREATE_SMURF_START';
export const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS';

export const UPDATE_SMURF_START = 'UPDATE_SMURF_START';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';

const API_URL = 'http://localhost:3333/smurfs';
const GET = 'get';
const POST = 'post';
const PUT = 'put';
const DELETE = 'delete';

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
  delete: (success, id) =>
    tryApiDispatch(DELETE, success, null, `${API_URL}/${id}`),
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

export const deleteSmurf = id => async dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  dispatch(await callApi.delete(DELETE_SMURF_SUCCESS, id));
};
