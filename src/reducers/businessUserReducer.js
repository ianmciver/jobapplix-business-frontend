import {
  UPDATE_USER,
  FETCHING_USER_DATA,
  FETCHING_USER_DATA_COMPLETE
} from "../actions/businessUserActions";
const initialState = {
  id: "",
  name: "",
  title: "",
  imageUrl: "",
  loading: false
};

export default function BusinessUserReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.payload };
    case FETCHING_USER_DATA:
      return { ...state, loading: true };
    case FETCHING_USER_DATA_COMPLETE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
