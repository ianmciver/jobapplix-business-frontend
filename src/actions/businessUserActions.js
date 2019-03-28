import axios from "axios";

import { firebase } from "../index";

export const UPDATE_USER = "UPDATE_USER";

export const createUser = (email, name, title, next) => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    axios
      .post(`${API_URL}/businesses/user`, { token, email, title, name })
      .then(res => {
        dispatch({ type: UPDATE_USER, user: { email, name, title } });
        next();
      })
      .catch(err => {
        console.log(err);
      });
  };
};
