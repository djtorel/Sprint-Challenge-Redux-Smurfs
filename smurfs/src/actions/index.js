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

const tryApiDispatch = async (method, success, options) => {
  const { id = null, apiPayload } = options || {};
  try {
    const { data } = await axios[method](
      `${API_URL}/${id !== null ? id : ''}`,
      apiPayload
    );
    return { type: success, payload: data };
  } catch ({ message }) {
    return { type: ERROR, payload: message };
  }
};

const dispatchApi = (method, [start, success], options) => async dispatch => {
  dispatch({ type: start });
  dispatch(await tryApiDispatch(method, success, options));
};

const callApi = {
  get: actions => dispatchApi(GET, actions),
  post: (actions, apiPayload) => dispatchApi(POST, actions, { apiPayload }),
  put: (actions, apiPayload, id) =>
    dispatchApi(PUT, actions, { apiPayload, id }),
  delete: (actions, id) => dispatchApi(DELETE, actions, { id }),
};

const SMURF_GET = [FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS];
export const getSmurfs = () => callApi.get(SMURF_GET);

const SMURF_ADD = [CREATE_SMURF_START, CREATE_SMURF_SUCCESS];
export const addSmurf = apiPayload => callApi.post(SMURF_ADD, apiPayload);

const SMURF_UPDATE = [UPDATE_SMURF_START, UPDATE_SMURF_SUCCESS];
export const updateSmurf = (apiPayload, id) =>
  callApi.put(SMURF_UPDATE, apiPayload, id);

const SMURF_DELETE = [DELETE_SMURF_START, DELETE_SMURF_SUCCESS];
export const deleteSmurf = id => callApi.delete(SMURF_DELETE, id);
