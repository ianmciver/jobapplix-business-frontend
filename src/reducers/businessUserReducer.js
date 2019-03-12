import { UPDATE_USER } from "../actions/businessUserActions";
const initialState = {
  id: "",
  name: "",
  title: "",
  imageUrl: ""
};

export default function BusinessUserReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
