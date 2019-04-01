import { firebase } from "../index";

const isLoggedIn = async () => {
  const token = await firebase.doGetCurrentUserIdToken();
  return token ? true : false;
};

export default isLoggedIn;
