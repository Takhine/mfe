import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

// Mount function to start up the app
const mount = (el, {onNavigate, defaultHistory, initialPath}) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });
  if(onNavigate) {
    history.listen(onNavigate);
  }
  ReactDom.render(<App history={history} />, el);
  return {
    onParentNavigate: ({pathname: nextPathname}) => {
      const {pathname} = history.location;
      if(pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  }
};

// If we are in development and in isolation
// call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_auth-dev-root");
  if (devRoot) {
    mount(devRoot, {defaultHistory: createBrowserHistory()});
  }
}

// If we are running the application in a container
// We should export the mount function

export { mount };
