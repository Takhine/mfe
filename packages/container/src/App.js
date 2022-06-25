import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Header from "./components/Header";
import Progress from "./components/Progress";

const Marketing = lazy(() => import("./components/MarketingApp"));
const Auth = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <div>
            <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
            <Suspense fallback={<Progress />}>
              <Switch>
                <Route path="/auth">
                  <Auth onSignIn={() => setIsSignedIn(true)} />
                </Route>
                <Route path="/" component={Marketing}>
                  <Marketing />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
