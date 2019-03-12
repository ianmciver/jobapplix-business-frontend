import axios from "axios";

export const UPDATE_USER = "UPDATE_USER";

export const createUser = (email, name, title, token, next) => {
  return dispatch => {
    localStorage.setItem("jobapplix-token", token);
    dispatch({ type: UPDATE_USER, user: { email, name, title } });
    next();
  };
};
