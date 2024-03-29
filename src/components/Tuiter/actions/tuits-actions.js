import axios from 'axios';
import * as service from '../services/tuits-service';
const TUITS_API = 'http://localhost:4000/api/tuits';
export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';

export const createTuit = async (dispatch, tuit) => {
  const newTuit = await service.createTuit(tuit);
  dispatch({
    type: CREATE_TUIT,
    newTuit
  });
}

export const findAllTuits = async (dispatch) => {
  const tuits = await service.findAllTuits();
  console.log("tuits is ",tuits);
  dispatch({
    type: FIND_ALL_TUITS,
    tuits
  });
}

export const updateTuit = async (dispatch, tuit) => {
  const status = await service.updateTuit(tuit);
  dispatch({
    type: UPDATE_TUIT,
    tuit
  });

  return status;

};

export const deleteTuit = async (dispatch, tuit) => {
  const response = await service.deleteTuit(tuit);
  dispatch({
    type: DELETE_TUIT,
    tuit
  })

  return response.data;
}
