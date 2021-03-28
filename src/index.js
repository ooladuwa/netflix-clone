import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { FirebaseContext } from "./context/Firebase";

const config = {
  apiKey: "AIzaSyDDWcPENxlCAofqr-j-mI5xz2i76PTM8s4",
  authDomain: "netflix-clone-23bf6.firebaseapp.com",
  projectId: "netflix-clone-23bf6",
  storageBucket: "netflix-clone-23bf6.appspot.com",
  messagingSenderId: "269591505037",
  appId: "1:269591505037:web:6007c9ee3b967588f8dac4",
};

const fireBase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      ;
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
