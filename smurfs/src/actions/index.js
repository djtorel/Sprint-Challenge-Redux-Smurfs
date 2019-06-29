import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ERROR = 'ERROR';
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';

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

const tryApiDispatch = async (type, success, apiPayload = null) => {
  try {
    const { data } = await axios[type](API_URL, apiPayload);
    return { type: success, payload: data };
  } catch ({ message }) {
    return { type: ERROR, payload: message };
    }
};

const callApi = {
  get: success => tryApiDispatch(GET, success),
  post: (success, payload) => tryApiDispatch(POST, success, payload),
};

export const getSmurfs = () => async dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  dispatch(await callApi.get(FETCH_SMURFS_SUCCESS));
};
};
