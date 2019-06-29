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

const tryApiDispatch = async (dispatch, type, success, apiPayload = null) => {
  const { data } = await axios[type](API_URL, apiPayload).catch(
    ({ message }) => {
      dispatch({ type: ERROR, payload: message });
    }
  );

  data && dispatch({ type: success, payload: data });
};

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  tryApiDispatch(dispatch, GET, FETCH_SMURFS_SUCCESS);
  // try {
  //   const { data } = await axios.get(API_URL);
  //   dispatch({ type: FETCH_SMURFS_SUCCESS, payload: data });
  // } catch ({ message }) {
  //   dispatch({ type: ERROR, payload: message });
  // }
};
