import React from "react";
import ReactDom from "react-dom";
import App from "./App";
console.log("marketing");

// Mount function to start up the app
const mount = (el) => {
  ReactDom.render(<App />, el);
};

// If we are in development and in isolation
// call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// If we are running the application in a container
// We should export the mount function

export { mount };
