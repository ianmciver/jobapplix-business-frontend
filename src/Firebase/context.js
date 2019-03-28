import React, { useContext } from "react";

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => {
  const firebase = useContext(FirebaseContext);
  console.log(firebase);
  return <Component {...props} firebase={firebase} />;
};

export default FirebaseContext;
