import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { StripeProvider } from "react-stripe-elements";
import thunk from "redux-thunk";

import App from "./App";
import Firebase, { FirebaseContext } from "./Firebase";
import reducers from "./reducers";
import "./index.css";
import { API_URL } from "./constants/urls";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(API_URL))
  // other store enhancers if any
);

const store = createStore(combineReducers(reducers), enhancer);

export const firebase = new Firebase();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
        <FirebaseContext.Provider value={firebase}>
          <App />
        </FirebaseContext.Provider>
      </StripeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
