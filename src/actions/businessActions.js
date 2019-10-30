import axios from "axios";

import { API_URL } from "../constants/urls";
import { firebase } from "../index";
import {
  FETCHING_USER_DATA,
  FETCHING_USER_DATA_COMPLETE,
  UPDATE_USER,
  SELECT_BUSINESS
} from "./businessUserActions";

export const CREATE_BUSINESS_BASICS = "CREATE_BUSINESS_BASICS";
export const UPDATE_BUSINESS = "UPDATE_BUSINESS";
export const UPDATE_APP_GROUP = "UPDATE_APP_GROUP";
export const UPDATE_POSITION = "UPDATE_POSITION";
export const UPDATE_USERS = "UPDATE_USERS";
export const UPDATE_PENDING_USERS = "UPDATE_PENDING_USERS";
export const DELETE_PENDING_USER = "DELETE_PENDING_USER";
export const UPDATE_USER_ROLE = "UPDATE_USER_ROLE";
export const CREATE_POSITION = "CREATE_POSITION";
export const FETCHING_ERROR = "FETCHING_ERROR";

export const createBusinessBasics = itemsToUpdate => {
  return {
    type: CREATE_BUSINESS_BASICS,
    payload: { ...itemsToUpdate }
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

export const processPaymentDetails = (stripe_token, len, coupon, next) => {
  return async (dispatch, getState, API_URL) => {
    const { id } = getState().business;
    const token = await firebase.doGetCurrentUserIdToken();
    axios
      .post(`${API_URL}/businesses/subscribe?bid=${id}`, {
        token,
        stripe_token,
        len,
        coupon
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
        `${API_URL}/businesses/logo?bid=${id}&file-name=${encodeURIComponent(
          file.name
        )}&file-type=${encodeURIComponent(file.type)}`,
        { token }
      )
      .then(({ data }) => {
        return axios({
          method: "put",
          url: data.signedRequest,
          data: file,
          headers: { "Content-Type": encodeURIComponent(file.type) }
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

export const getBusinessSummary = errorCallback => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    let selectedBusinessId;
    axios
      .get(`${API_URL}/businesses/user?token=${token}`)
      .then(({ data }) => {
        dispatch({ type: UPDATE_USER, user: data.user });
        let selectedPreference = data.user.businesses.find(
          item => item.prefered_business
        );
        selectedBusinessId = selectedPreference || data.user.businesses[0].id;
        dispatch({ type: SELECT_BUSINESS, selected: selectedBusinessId });
        return axios.get(
          `${API_URL}/businesses/summary?token=${token}&bid=${selectedBusinessId}`
        );
      })
      .then(({ data }) => {
        dispatch({ type: UPDATE_BUSINESS, payload: data.business });
        dispatch({ type: FETCHING_USER_DATA_COMPLETE });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCHING_ERROR });
        errorCallback();
      });
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

export const createPosition = position => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    const { id } = getState().business;
    try {
      let response = await axios.post(
        `${API_URL}/businesses/position?bid=${id}`,
        { ...position, token }
      );
      dispatch({
        type: CREATE_POSITION,
        position: { ...position, active: true, id: response.data.id }
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
      await axios.put(
        `${API_URL}/businesses/position/${position_id}?bid=${id}`,
        {
          ...updatedFields,
          token
        }
      );
      dispatch({
        type: UPDATE_POSITION,
        position: { id: position_id, ...updatedFields }
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getListOfBusinessUsers = () => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    const { id } = getState().business;
    try {
      let response = await axios.get(
        `${API_URL}/businesses/users?bid=${id}&token=${token}`
      );
      dispatch({ type: UPDATE_USERS, users: response.data });
      dispatch({ type: FETCHING_USER_DATA_COMPLETE });
    } catch (err) {
      console.log(err);
      dispatch({ type: FETCHING_USER_DATA_COMPLETE });
    }
  };
};

export const getListOfPendingUsers = () => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    const { id } = getState().business;
    try {
      let response = await axios.get(
        `${API_URL}/businesses/pendingusers?bid=${id}&token=${token}`
      );
      dispatch({ type: UPDATE_PENDING_USERS, users: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deletePendingUser = pendingId => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    const { id } = getState().business;
    try {
      await axios.delete(
        `${API_URL}/businesses/pendingusers?bid=${id}&token=${token}&pendingid=${pendingId}`
      );
      dispatch({ type: DELETE_PENDING_USER, id: pendingId });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateBusinessDetails = (business, next) => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    const { id } = getState().business;
    return axios
      .put(`${API_URL}/businesses?bid=${id}`, { token, business })
      .then(() => {
        dispatch({ type: CREATE_BUSINESS_BASICS, payload: business });
        next();
      });
  };
};

export const cancelSubscription = next => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    const { id } = getState().business;
    return axios
      .delete(`${API_URL}/businesses/subscribe?bid=${id}&token=${token}`)
      .then(() => {
        dispatch({ type: UPDATE_BUSINESS, payload: { active: false } });
        next();
      })
      .catch(err => console.log(err));
  };
};

export const updateSubscription = (subType, next) => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    const { id } = getState().business;
    return axios
      .put(`${API_URL}/businesses/subscribe?bid=${id}`, {
        length: subType,
        token
      })
      .then(() => {
        dispatch({ type: UPDATE_BUSINESS, payload: { sub_type: subType } });
        next();
      })
      .catch(err => console.log(err));
  };
};

export const updatePaymentMethod = (stripe_token, next) => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    const { id } = getState().business;
    return axios
      .put(`${API_URL}/businesses/subscribe?bid=${id}`, {
        stripe_token,
        token
      })
      .then(() => {
        next();
      })
      .catch(err => console.log(err));
  };
};

export const updateUserRole = (uid, role) => {
  return async (dispatch, getState, API_URL) => {
    const token = await firebase.doGetCurrentUserIdToken();
    const { id } = getState().business;
    axios
      .put(
        `${API_URL}/businesses/assignuser/${role}?bid=${id}&uid=${uid}&token=${token}`
      )
      .then(res => {
        console.log(res);
        dispatch({ type: UPDATE_USER_ROLE, payload: { id: uid, role } });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const startLoadingScreen = () => {
  return { type: FETCHING_USER_DATA };
};
