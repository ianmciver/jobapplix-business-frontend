import axios from "axios";

import { API_URL } from "../constants/urls";
import { firebase } from "../index";
import {
  FETCHING_USER_DATA,
  FETCHING_USER_DATA_COMPLETE,
  UPDATE_USER
} from "./businessUserActions";

export const CREATE_BUSINESS_BASICS = "CREATE_BUSINESS_BASICS";
export const UPDATE_BUSINESS = "UPDATE_BUSINESS";
export const UPDATE_APP_GROUP = "UPDATE_APP_GROUP";
export const UPDATE_POSITION = "UPDATE_POSITION";

export const createBusinessBasics = (
  name,
  email,
  address,
  phone,
  website,
  url
) => {
  return {
    type: CREATE_BUSINESS_BASICS,
    payload: { name, email, address, phone, website, url }
  };
};

export const createBusinessWithDescription = (description, next) => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    const { name, email, address, url, website, phone } = getState().business;
    if (token) {
      axios
        .post(`${API_URL}/businesses`, {
          token,
          name,
          email,
          address,
          url,
          website,
          phone,
          description
        })
        .then(res => {
          dispatch({
            type: UPDATE_BUSINESS,
            payload: { description, id: res.data.id }
          });
          next();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
};

export const checkUrlForAvailability = url => {
  return axios.get(`${API_URL}/businesses/validateurl?url=${url}`);
};

export const processPaymentDetails = (stripe_token, len, next) => {
  return async (dispatch, getState, API_URL) => {
    const { id } = getState().business;
    const token = await firebase.doGetCurrentUserIdToken();
    axios
      .post(`${API_URL}/businesses/subscribe?bid=${id}`, {
        token,
        stripe_token,
        len
      })
      .then(res => {
        next();
      });
  };
};

export const uploadFileToS3 = (file, next) => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    const { id } = getState().business;
    axios
      .post(
        `${API_URL}/businesses/logo?bid=${id}&file-name=${
          file.name
        }&file-type=${file.type}`,
        { token }
      )
      .then(res => {
        return axios({
          method: "put",
          url: res.data.signedRequest,
          data: file,
          headers: { "Content-Type": file.type }
        });
      })
      .then(res => {
        next();
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getBusinessSummary = () => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    axios
      .get(`${API_URL}/businesses/summary?token=${token}`)
      .then(res => {
        dispatch({ type: UPDATE_BUSINESS, payload: res.data.businesses[0] });
        return axios.get(`${API_URL}/businesses/user?token=${token}`);
      })
      .then(res => {
        dispatch({ type: UPDATE_USER, user: res.data.user });
        dispatch({ type: FETCHING_USER_DATA_COMPLETE });
      })
      .catch(err => console.log(err));
  };
};

export const updateApplicationGroup = (appid, group) => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    const { id } = getState().business;
    dispatch({ type: UPDATE_APP_GROUP, appid, group });
    try {
      await axios.put(`${API_URL}/applications/group?bid=${id}`, {
        appid,
        group,
        token
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updatePosition = (position_id, updatedFields) => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    const { id } = getState().business;
    try {
      let response = await axios.put(
        `${API_URL}/businesses/position/${position_id}?bid=${id}`,
        {
          ...updatedFields,
          token
        }
      );
      console.log(response);
      dispatch({ type: UPDATE_POSITION, position: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const startLoadingScreen = () => {
  return { type: FETCHING_USER_DATA };
};
