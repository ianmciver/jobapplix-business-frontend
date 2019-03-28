import axios from "axios";

import { API_URL } from "../constants/urls";
import { firebase } from "../index";

export const CREATE_BUSINESS_BASICS = "CREATE_BUSINESS_BASICS";
export const UPDATE_BUSINESS = "UPDATE_BUSINESS";

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
        console.log(res);
        return axios({
          method: "put",
          url: res.data.signedRequest,
          data: file,
          headers: { "Content-Type": file.type }
        });
      })
      .then(res => {
        console.log(res);
        next();
      })
      .catch(err => {
        console.log(err);
      });
  };
};
