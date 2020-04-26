import React from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Auth0Provider } from "./api/auth/auth0";

import Layout from "./Layout";
import SocketProvider from "./api/websockets";
import * as serviceWorker from "./serviceWorker";
import { store, persistor } from "./store";
import history from "./utils/history";

import "./assets/styles/main.sass";

const { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID } = process.env;

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Auth0Provider
        domain={REACT_APP_AUTH0_DOMAIN}
        client_id={REACT_APP_AUTH0_CLIENT_ID}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <SocketProvider wsUrl={"ws://localhost:4000/socket"}>
          <Layout />
        </SocketProvider>
      </Auth0Provider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
