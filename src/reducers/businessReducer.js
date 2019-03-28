import {
  CREATE_BUSINESS_BASICS,
  UPDATE_BUSINESS
} from "../actions/businessActions";

const initialState = {
  // id: undefined,
  id: 1,
  name: "",
  email: "",
  address: "",
  url: "",
  phone: "",
  description: "",
  active: false,
  canceled: false,
  parent: "",
  image_url: "",
  customQuestions: []
};

export default function BusinessReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BUSINESS_BASICS:
      return { ...state, ...action.payload };
    case UPDATE_BUSINESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
