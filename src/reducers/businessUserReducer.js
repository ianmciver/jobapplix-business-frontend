import {
  UPDATE_USER,
  FETCHING_USER_DATA,
  FETCHING_USER_DATA_COMPLETE,
  SELECT_BUSINESS
} from "../actions/businessUserActions";

import { FETCHING_ERROR } from "../actions/businessActions";
const initialState = {
  id: "",
  name: "",
  title: "",
  image_url: "",
  email: "",
  loading: true,
  error: false,
  businesses: [],
  selectedBusiness: null
};

export default function BusinessUserReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.user };
    case FETCHING_USER_DATA:
      return { ...state, loading: true, error: false };
    case FETCHING_USER_DATA_COMPLETE:
      return { ...state, loading: false, error: false };
    case FETCHING_ERROR:
      return { ...state, loading: false, error: true };
    case SELECT_BUSINESS:
      return { ...state, selected: action.selectedId };
    default:
      return state;
  }
}
