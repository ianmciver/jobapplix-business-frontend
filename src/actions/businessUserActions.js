import axios from "axios";

import { firebase } from "../index";

export const UPDATE_USER = "UPDATE_USER";
export const FETCHING_USER_DATA = "FETCHING_USER_DATA";
export const FETCHING_USER_DATA_COMPLETE = "FETCHING_USER_DATA_COMPLETE";

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

export const fetchUser = () => {
  return async (dispatch, getState, API_URL) => {
    dispatch({ type: FETCHING_USER_DATA });
    const token = await firebase.doGetCurrentUserIdToken();
    axios
      .get(`${API_URL}/businesses/user?token=${token}`)
      .then(res => {
        dispatch({ type: UPDATE_USER, user: res.data.user });
      })
      .catch(err => console.log(err));
  };
};

export const updateUserImage = file => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    let userImageUrl;
    axios
      .put(
        `${API_URL}/businesses/user/image?file-name=${file.name}&file-type=${
          file.type
        }`,
        { token }
      )
      .then(res => {
        userImageUrl = res.data.image_url;
        return axios({
          method: "put",
          url: res.data.signedRequest,
          data: file,
          headers: { "Content-Type": file.type }
        });
      })
      .then(() => {
        dispatch({
          type: UPDATE_USER,
          user: { image_url: userImageUrl }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
