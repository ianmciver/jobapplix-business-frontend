import {
  CREATE_BUSINESS_BASICS,
  CREATE_POSITION,
  UPDATE_BUSINESS,
  UPDATE_APP_GROUP,
  UPDATE_POSITION,
  UPDATE_USERS,
  UPDATE_PENDING_USERS,
  DELETE_PENDING_USER,
  UPDATE_USER_ROLE
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
  applications: [],
  role: 14,
  users: [],
  pendingUsers: [],
  subDetails: {}
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
    case CREATE_POSITION:
      return { ...state, positions: [...state.positions, action.position] };
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
    case UPDATE_USERS:
      return { ...state, users: action.users };
    case UPDATE_PENDING_USERS:
      return { ...state, pendingUsers: action.users };
    case DELETE_PENDING_USER:
      let newPendingUsers = [...state.pendingUsers];
      let deleted = newPendingUsers.findIndex(item => item.id === action.id);
      newPendingUsers = [
        ...newPendingUsers.slice(0, deleted),
        ...newPendingUsers.slice(deleted + 1)
      ];
      return { ...state, pendingUsers: newPendingUsers };
    case UPDATE_USER_ROLE:
      const users = [...state.users];
      const userIndex = users.findIndex(u => u.id === action.payload.id);
      const user = { ...users[userIndex] };
      const userBusinesses = [...user.businesses];
      const firstBusiness = { ...userBusinesses[0] };
      firstBusiness.role = action.payload.role;
      userBusinesses[0] = firstBusiness;
      user.businesses = userBusinesses;
      users[userIndex] = user;
      return {
        ...state,
        users
      };

    default:
      return state;
  }
}
