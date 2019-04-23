import {
  CREATE_BUSINESS_BASICS,
  UPDATE_BUSINESS,
  UPDATE_APP_GROUP,
  UPDATE_POSITION
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
  customQuestions: [],
  positions: [],
  applications: []
};

export default function BusinessReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BUSINESS_BASICS:
      return { ...state, ...action.payload };
    case UPDATE_BUSINESS:
      return { ...state, ...action.payload };
    case UPDATE_APP_GROUP:
      const newApps = state.applications.map(app => {
        if (app.app_id === action.appid) {
          let newApp = {
            ...app,
            questions: app.questions.map(q => ({ ...q })),
            group: action.group
          };
          return newApp;
        } else {
          return app;
        }
      });
      return { ...state, applications: newApps };
    case UPDATE_POSITION:
      let positionIndex = state.positions.findIndex(
        pos => pos.id === action.position.id
      );
      let position = state.positions[positionIndex];
      position = {
        ...position,
        ...action.position
      };
      let newPositions = [...state.positions];
      newPositions[positionIndex] = position;
      return { ...state, positions: newPositions };
    default:
      return state;
  }
}
